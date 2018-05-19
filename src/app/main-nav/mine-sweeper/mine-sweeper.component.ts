import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../animations/animations';

@Component({
  selector: 'app-mine-sweeper',
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.css'],
  animations: [slideInDownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MineSweeperComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

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
