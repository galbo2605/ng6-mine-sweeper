import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../animations/animations';

@Component({
  selector: 'app-boom-stats',
  templateUrl: './boom-stats.component.html',
  styleUrls: ['./boom-stats.component.css'],
  animations: [slideInDownAnimation]
})
export class BoomStatsComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
