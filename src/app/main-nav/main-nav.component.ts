import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver) {
    const n = 3, powerSet = [[]];
    for (let i = 1; i <= n; i++) { // 1, 2, 3
      console.log(i);
      for (let j = 0, len = powerSet.length; j < len; j++) {

        // 1st iteration i = 1, len = 1, j = 0
        // [[]].push([[]][0].concat(1)) // push([1])
        // powerSet = [[],[1]]
        // --- end ---

        // 2nd iteration i = 2, len = 2, j = 0
        // [[],[1]].push([[],[1]][0].concat(2)) // push([2])
        // powerSet = [[],[1],[2]]
        // 2nd iteration i = 2, len = 2, j = 1
        // [[],[1],[2]].push([[],[1],[2]][1].concat(2)) // push([1,2])
        // powerSet = [[],[1],[2],[1,2]]
        // --- end ---

        // 3nd iteration i = 3, len = 4, j = 0
        // [[],[1],[2],[1,2]].push([[],[1],[2],[1,2]][0].concat(3)) // push([3])
        // powerSet = [[],[1],[2],[1,2],[3]]
        // 3nd iteration i = 3, len = 4, j = 1
        // [[],[1],[2],[1,2]].push([[],[1],[2],[1,2]][1].concat(3)) // push([1,3])
        // powerSet = [[],[1],[2],[1,2],[3],[1,3]]
        // 3nd iteration i = 3, len = 4, j = 2
        // [[],[1],[2],[1,2]].push([[],[1],[2],[1,2]][2].concat(3)) // push([2,3])
        // powerSet = [[],[1],[2],[1,2],[3],[1,3],[2,3]]
        // 3nd iteration i = 3, len = 4, j = 3
        // [[],[1],[2],[1,2]].push([[],[1],[2],[1,2]][3].concat(3)) // push([1,2,3])
        // powerSet = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
        // --- end ---
        powerSet.push(powerSet[j].concat(i));
        console.log(powerSet.slice());
      }
    }
    console.log(powerSet.sort((a, b) => a.length - b.length).slice());
    const sum = powerSet.reduce((all, item) => {
      all.push(...item);
      return all;
    }, []).reduce((all, item) => {
      all += item;
      return all;
    });
    console.log(sum);
    const powerset2 = xs => xs.reduce((a, x) => a.concat(a.map(y => [x].concat(y))), [[]])
      .sort((a, b) => a.length - b.length);
    // TEST
    const sum2 = {
      '[1,2,3] ->': powerset2([1, 2, 3]),
      'sum of powerset ->': powerset2([1, 2, 3]).reduce((a, x) => a += x.reduce((b, y) => b += y, 0), 0),
      'empty set ->': powerset2([]),
      'set which contains only the empty set ->': powerset2([
        []
      ])
    };
    console.table(sum2);
  }
}
