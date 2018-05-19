import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../animations/animations';

@Component({
  selector: 'app-custom-photo',
  templateUrl: './custom-photo.component.html',
  styleUrls: ['./custom-photo.component.css'],
  animations: [slideInDownAnimation]
})
export class CustomPhotoComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor() {
  }

  ngOnInit() {
  }

}
