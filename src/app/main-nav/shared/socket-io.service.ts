import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  url = 'http://localhost:3000';
  socket;

  chat = {
    room: '',
    user: '',
    users: []
  };

  constructor() {
  }

  initSocket(): void {
    this.socket = io(this.url);
  }

  setNameAndRoom(name: string, room: string) {
    this.chat = {room: room, user: name, users: []};
    this.socket.emit('join', {name, room}, () => {
    });
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

  updateUserList() {
  }

  getChatDetails() {
    return this.chat;
  }

  disconnect() {
    this.socket.close();
  }
}
