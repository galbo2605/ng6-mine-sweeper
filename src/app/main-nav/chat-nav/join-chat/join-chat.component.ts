import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../../animations/animations';

@Component({
  selector: 'app-join-chat',
  templateUrl: './join-chat.component.html',
  styleUrls: ['./join-chat.component.css'],
  animations: [slideInDownAnimation]
})
export class JoinChatComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';


  constructor() { }

  ngOnInit() {
  }

}
