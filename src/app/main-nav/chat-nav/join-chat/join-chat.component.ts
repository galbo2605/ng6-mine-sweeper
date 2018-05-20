import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../../animations/animations';
import {Router} from '@angular/router';
import {SocketIoService} from '../../shared/socket-io.service';

@Component({
  selector: 'app-join-chat',
  templateUrl: './join-chat.component.html',
  styleUrls: ['./join-chat.component.css'],
  animations: [slideInDownAnimation]
})
export class JoinChatComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';


  constructor(private router: Router,
              private socketIoService: SocketIoService) {
  }

  ngOnInit() {
  }

  onJoinRoom(name: string, room: string) {
    if (name && room) {
      this.socketIoService.setNameAndRoom(name, room);
      this.router.navigate([{outlets: {chatRouter: ['room']}}]);
    }
  }

}
