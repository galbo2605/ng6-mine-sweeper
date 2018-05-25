import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {ChatComponent} from './chat.component';
import {ChatMembersComponent} from './chat-members/chat-members.component';
import {ChatMessengerComponent} from './chat-messenger/chat-messenger.component';
import {ChatRoutingModule} from './chat-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [
    ChatComponent,
    ChatMembersComponent,
    ChatMessengerComponent
  ],
  exports: [ChatComponent]
})
export class ChatModule {
}
