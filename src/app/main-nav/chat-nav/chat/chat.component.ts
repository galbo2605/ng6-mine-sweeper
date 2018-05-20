import {Component, HostBinding, OnDestroy, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {SocketIoService} from '../../shared/socket-io.service';
import {slideInDownAnimation} from '../../../animations/animations';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators/catchError';
import {of as observableOf} from 'rxjs/observable/of';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [slideInDownAnimation]
})
export class ChatComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @ViewChild('chatMessages') chatMessagesV1: any;
  @ViewChild('messageTemplate', {read: TemplateRef}) messageTemplate: any;
  @ViewChild('chatMessages', {read: ViewContainerRef}) chatMessages: any;

  chat = {
    room: '',
    user: '',
    users: []
  };

  socketSubscription: Subscription;

  constructor(private router: Router,
              private renderer: Renderer2,
              private socketIoService: SocketIoService) {
  }

  ngOnInit() {
    this.chat = this.socketIoService.getChatDetails();
    if (!this.chat.room || !this.chat.user) {
      this.router.navigate(['']);
    }

    this.socketSubscription = this.socketIoService.onMessageReceived().pipe(
      catchError(e => {
        console.log(e);
        return observableOf({text: 'error', from: 'something went wrong'});
      })
    ).subscribe(cb => {
      this.onSendMessage(cb.text, cb.from);
    });
  }

  onSendMessage(message: string, from: string) {
    if (message) {
      this.socketIoService.sendMessage(message);
      const view = this.messageTemplate
        .createEmbeddedView({message: message, from: from, time: new Date().toLocaleTimeString()});
      this.chatMessages.insert(view);
      this.chatMessagesV1.nativeElement.scrollTop = this.chatMessagesV1.nativeElement.scrollHeight;
    }
  }

  returnRandom() {
    return Math.random();
  }

  ngOnDestroy() {
    this.socketIoService.disconnect();
    this.socketSubscription.unsubscribe();
  }
}
