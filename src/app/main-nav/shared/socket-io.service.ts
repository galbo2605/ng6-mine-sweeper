import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  url = 'http://localhost:3000';
  socket;

  user: string;
  room: string;

  constructor() {
    this.socket = io(this.url);
  }

  sendMessage(message: string) {
    this.socket.emit('newMessage', message);
  }

  disconnect() {
    this.socket.emit('disconnect', this.socket.id);
  }
}
