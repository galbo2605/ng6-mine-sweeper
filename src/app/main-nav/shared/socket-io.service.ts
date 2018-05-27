import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
import {Chat, Message} from '../chat-nav/models/chat.model';
import {Subject} from 'rxjs/Subject';
import {isPlatformBrowser} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  messages = new Subject<Message[]>();
  url = this.baseURI();
  socket;

  chat: Chat;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  baseURI() {
    if (isPlatformBrowser(this.platformId)) {
      const protocol = window.location.protocol;
      const host = window.location.host.split(':')[0];
      console.log(`${protocol}//${host}`);
      return `${protocol}//${host}:3000`;
    }
  }

  initSocket(): void {
    console.log(this.url);
    this.socket = io(this.url);
  }

  setNameAndRoom(name: string, room: string) {
    this.chat = new Chat(room, name, [], []);
    this.socket.emit('join', {name, room}, () => {
    });
  }

  storeMessage(message: Message) {
    this.chat.messages.push(message);
    this.messages.next(this.chat.messages);
  }

  setUsersList(users) {
    this.chat.users = users;
  }

  sendMessage(message: string) {
    this.socket.emit('createMessage', message, () => {
    });
  }

  recieveMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('newMessage', cb => {
        return observer.next(cb);
      });
    });
  }

  recieveUserList(): Observable<string[]> {
    return new Observable<any>(observer => {
      this.socket.on('updateUserList', cb => {
        return observer.next(cb);
      });
    });
  }

  getChatDetails() {
    return this.chat;
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
