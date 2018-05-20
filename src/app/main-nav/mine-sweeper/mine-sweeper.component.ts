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

  // OOP Encapsulation
  mineSweeper = {
    board: [],
    score: 0,
    size: [{y: 9, x: 9}, {y: 9, x: 12}, {y: 12, x: 15}, {y: 15, x: 20}],
    difficulty: 1.5,
    setMines: function (y?, x?) {
      this.board = [];
      for (let i = 0; i < y; i++) {
        this.board.push([]);
        for (let j = 0; j < x; j++) {
          this.board[i].push(Math.round((Math.random()) / this.difficulty));
        }
      }
    }
  };

  constructor() {
  }

  ngOnInit() {
    this.mineSweeper.setMines(9, 9);
  }

  onSweep(y: number, x: number, fieldBtn?) {
    if (this.mineSweeper.board[y][x]) {
      return 'BOOM!';
    } else {
      const bombs = this.mineSweeper.board
        .reduce((all, item, index) => (index - y - 1) * (index - y + 1) <= 0 ?
          // Short circuit evaluation
          all.concat(item.slice(x && x - 1, x + 2)) : all, [])
        .filter(value => value).length;
      if (fieldBtn) {
        if (fieldBtn.innerHTML.length > 1) {
          this.mineSweeper.score += bombs;
          fieldBtn.innerHTML = bombs;
        }
      }
      return bombs;
    }
  }
}
