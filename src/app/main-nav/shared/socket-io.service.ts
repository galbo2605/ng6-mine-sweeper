import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
import {Chat, Message} from '../chat-nav/models/chat.model';
import {Subject} from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  messages = new Subject<Message[]>();
  url = 'http://localhost:3000';
  socket;

  chat: Chat;

  constructor() {
  }

  initSocket(): void {
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
