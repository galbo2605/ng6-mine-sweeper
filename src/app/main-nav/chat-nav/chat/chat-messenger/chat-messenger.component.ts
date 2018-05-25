import {
  AfterViewInit,
  Component,
  HostBinding, OnDestroy,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {Subscription} from 'rxjs';
import {slideInDownAnimation} from '../../../../animations/animations';
import {Message} from '../../models/chat.model';
import {Router} from '@angular/router';
import {SocketIoService} from '../../../shared/socket-io.service';

@Component({
  selector: 'app-chat-messenger',
  templateUrl: './chat-messenger.component.html',
  styleUrls: ['./chat-messenger.component.css'],
  animations: [slideInDownAnimation]
})
export class ChatMessengerComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @ViewChildren('chatMessages') chatMessagesListener: QueryList<any>;
  @ViewChild('messageTemplate', {read: TemplateRef}) messageTemplate: TemplateRef<any>;
  @ViewChild('chatMessagesContainer', {read: ViewContainerRef}) chatMessagesContainer: ViewContainerRef;
  messages: Message[];

  messagesSub: Subscription;
  cMlistenerSub: Subscription;

  constructor(private router: Router,
              private socketIoService: SocketIoService) {
  }

  ngOnInit() {
    this.messages = this.socketIoService.chat.messages;
    this.messagesSub = this.socketIoService.messages.subscribe(messages => {
      this.displayMessage(messages[messages.length - 1].message, messages[messages.length - 1].user,
        messages[messages.length - 1].time);
    });
    if (this.messages) {
      this.messages.forEach(message => {
        this.displayMessage(message.message, message.user, message.time);
      });
    }
  }

  ngAfterViewInit() {
    this.cMlistenerSub = this.chatMessagesListener.changes.subscribe(value => {
      value.first.nativeElement.scrollTop = value.first.nativeElement.scrollHeight;
    });
  }

  onSendMessage(message: string) {
    if (message) {
      this.socketIoService.sendMessage(message);
    }
  }

  displayMessage(message: string, from: string, time: string) {
    const view = this.messageTemplate.createEmbeddedView({message, from, time});
    this.chatMessagesContainer.insert(view);
  }

  returnRandom() {
    // return Math.random();
    return '';
  }

  ngOnDestroy() {
    this.messagesSub.unsubscribe();
    this.cMlistenerSub.unsubscribe();
  }
}
