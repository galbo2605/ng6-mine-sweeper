import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SocketIoService} from '../../../shared/socket-io.service';
import {slideInDownAnimation} from '../../../../animations/animations';
import {Chat} from '../../models/chat.model';

@Component({
  selector: 'app-chat-members',
  templateUrl: './chat-members.component.html',
  styleUrls: ['./chat-members.component.css'],
  animations: [slideInDownAnimation]
})
export class ChatMembersComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  chat: Chat;

  constructor(private router: Router,
              private socketIoService: SocketIoService) {
  }

  ngOnInit() {
    this.chat = this.socketIoService.getChatDetails();
  }

  onChat() {
    this.router.navigate([{outlets: {chat: ['room']}}]);
  }
}
