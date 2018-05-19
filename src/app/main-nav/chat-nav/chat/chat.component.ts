import {Component, HostBinding, OnInit} from '@angular/core';
import {SocketIoService} from '../../shared/socket-io.service';
import {slideInDownAnimation} from '../../../animations/animations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [slideInDownAnimation]
})
export class ChatComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';


  constructor(private socketIoService: SocketIoService) {
  }

  ngOnInit() {
  }

  onSendMessage(message: string) {
    if (message) {
      this.socketIoService.sendMessage(message);
    }
  }
}
