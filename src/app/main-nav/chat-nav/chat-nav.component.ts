import {Component, HostBinding, OnInit} from '@angular/core';
import {SocketIoService} from '../shared/socket-io.service';
import {slideInDownAnimation} from '../../animations/animations';

@Component({
  selector: 'app-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrls: ['./chat-nav.component.css'],
  animations: [slideInDownAnimation]
})
export class ChatNavComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor(private socketIoService: SocketIoService) {
  }

  ngOnInit() {
  }
}
