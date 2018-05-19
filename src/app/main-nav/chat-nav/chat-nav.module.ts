import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatNavComponent} from './chat-nav.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {SocketIoService} from '../shared/socket-io.service';
import {ChatComponent} from './chat/chat.component';
import {ChatNavRoutingModule} from './chat-nav-routing.module';
import {JoinChatComponent} from './join-chat/join-chat.component';

@NgModule({
  imports: [
    CommonModule,
    ChatNavRoutingModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [ChatNavComponent, ChatComponent, JoinChatComponent],
  exports: [ChatNavComponent],
  providers: [SocketIoService]
})
export class ChatNavModule {
}
