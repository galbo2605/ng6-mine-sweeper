import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../animations/animations';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  animations: [slideInDownAnimation]
})
export class QuestionsComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor() {
  }

  ngOnInit() {
  }

}
