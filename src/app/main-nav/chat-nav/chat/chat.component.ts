import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {SocketIoService} from '../../shared/socket-io.service';
import {slideInDownAnimation} from '../../../animations/animations';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators/catchError';
import {of as observableOf} from 'rxjs/observable/of';
import {Subscription} from 'rxjs';
import {Chat, Message} from '../models/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [slideInDownAnimation]
})
export class ChatComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  chat: Chat;

  message: Subscription;
  userListSub: Subscription;

  constructor(private router: Router,
              private socketIoService: SocketIoService) {
  }

  ngOnInit() {
    this.chat = this.socketIoService.getChatDetails();
    if (!this.chat.room || !this.chat.user) {
      this.router.navigate(['']);
    }
    this.message = this.socketIoService.recieveMessage().pipe(
      catchError(e => {
        console.log('message catchError');
        return observableOf({text: 'error', from: 'something went wrong'});
      })
    ).subscribe(cb => {
      this.socketIoService.storeMessage(new Message(cb.from, cb.text, new Date().toLocaleTimeString()));
    });
    this.userListSub = this.socketIoService.recieveUserList().pipe(
      catchError(e => {
        console.log('userListSub catchError');
        return observableOf({text: 'error', from: 'something went wrong'});
      })
    ).subscribe(users => {
      this.socketIoService.setUsersList(users);
    });
  }

  onRoom() {
    this.router.navigate([{outlets: {chat: ['room', {outlets: {room: ['members']}}]}}]);
  }

  ngOnDestroy() {
    this.message.unsubscribe();
    this.userListSub.unsubscribe();
  }
}
