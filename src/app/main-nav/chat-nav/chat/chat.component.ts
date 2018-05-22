import {
  AfterViewInit,
  Component,
  HostBinding,
  OnDestroy,
  OnInit, QueryList,
  TemplateRef,
  ViewChild, ViewChildren,
  ViewContainerRef
} from '@angular/core';
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
export class ChatComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @ViewChildren('chatMessages') chatMessagesListener: QueryList<any>;
  @ViewChild('messageTemplate', {read: TemplateRef}) messageTemplate: TemplateRef<any>;
  @ViewChild('chatMessagesContainer', {read: ViewContainerRef}) chatMessagesContainer: ViewContainerRef;

  chat = {
    room: '',
    user: '',
    users: []
  };

  socketSub: Subscription;
  cMlistenerSub: Subscription;

  constructor(private router: Router,
              private socketIoService: SocketIoService) {
  }

  ngOnInit() {
    this.chat = this.socketIoService.getChatDetails();
    if (!this.chat.room || !this.chat.user) {
      this.router.navigate(['']);
    }
    this.socketSub = this.socketIoService.recieveMessage().pipe(
      catchError(e => {
        console.log('socketSub catchError');
        return observableOf({text: 'error', from: 'something went wrong'});
      })
    ).subscribe(cb => {
      this.displayMessage(cb.text, cb.from);
    });
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

  displayMessage(message: string, from: string) {
    if (message) {
      const view = this.messageTemplate.createEmbeddedView(
        {message: message, from: from, time: new Date().toLocaleTimeString()});
      this.chatMessagesContainer.insert(view);
    }
  }

  returnRandom() {
    return Math.random();
  }

  ngOnDestroy() {
    this.socketIoService.disconnect();
    this.socketSub.unsubscribe();
    this.cMlistenerSub.unsubscribe();
  }
}
