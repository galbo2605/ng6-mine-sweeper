import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mine-sweeper',
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MineSweeperComponent implements OnInit {
  sweeperArr = [];

  boardSizes = [[9, 9], [9, 12], [12, 15], [15, 20], [20, 30]];

  score = 0;
  difficulty = 1.5;

  constructor() {
  }

  ngOnInit() {
    this.sweeperArr = [];
    for (let i = 0; i < 9; i++) {
      this.sweeperArr.push([]);
      for (let j = 0; j < 9; j++) {
        this.sweeperArr[i].push(Math.round((Math.random()) / this.difficulty));
      }
    }
    // const numberOfBombs = gridBlock.reduce((previousValue, currentRow, currentRowIndex) => {
    //   // get (up to 3) rows between y - 1 < y < y + 1
    //   if (this.isBetween(currentRowIndex, (y - 1), (y + 1))) {
    //     // concat to new single array
    //     return previousValue.concat(
    //       // filter values between x - 1 < x < x + 1
    //       currentRow.filter((value, index) => this.isBetween(index, (x - 1), (x + 1)))
    //     );
    //   } else {
    //     // return total concatenated rows
    //     return previousValue;
    //   }
    // }, []).filter(value => value).length;
    // const test = gridBlock.map((value, index) => {
    //   if (this.isBetween(index, (y - 1), (y + 1))) {
    //     const v = value.filter((value1, index1) => this.isBetween(index1, (x - 1), (x + 1)));
    //     console.log(v);
    //     return v;
    //   }
    // });
    // const test = gridBlock.reduce((all, item, index, array) => {
    //   if (this.isBetween(index, y - 1, y + 1)) {
    //     return +all + (item[x - 1] + item[x] + item[x + 1]);
    //   } else {
    //     return all;
    //   }
    // }, '');
    // const numberOfBombs = gridBlock.reduce((all, item, index) =>
    //     // short circuit evaluation x = 0 = truth (will not execute past &&)
    //     this.isBetween(index, y - 1, y + 1) ? all.concat(item.slice(x && x - 1, x + 2)) : all
    //   , []).filter(value => value).length;
    // return `(${y}, ${x}), ${numberOfBombs} bombs`;
    // isBetween(n, a, b) {
    //   return (n - a) * (n - b) <= 0;
    // }
  }

  onSweep(y: number, x: number, fieldBtn?) {
    if (this.sweeperArr[y][x]) {
      return 'BOOM!';
    } else {
      const bombs = this.sweeperArr
        .reduce((all, item, index) => (index - y - 1) * (index - y + 1) <= 0 ?
          all.concat(item.slice(x && x - 1, x + 2)) : all, [])
        .filter(value => value).length;
      if (fieldBtn) {
        if (fieldBtn.innerHTML.length > 1) {
          this.score += bombs;
          fieldBtn.innerHTML = bombs;
        }
      }
      return bombs;
    }
  }

  setBoardDifficulty(y?, x?) {
    this.sweeperArr = [];
    for (let i = 0; i < y; i++) {
      this.sweeperArr.push([]);
      for (let j = 0; j < x; j++) {
        this.sweeperArr[i].push(Math.round((Math.random()) / this.difficulty));
      }
    }
  }
}
