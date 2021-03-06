import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatNavComponent} from './chat-nav.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {ChatNavRoutingModule} from './chat-nav-routing.module';
import {JoinChatComponent} from './join-chat/join-chat.component';
import {ChatModule} from './chat/chat.module';

@NgModule({
  imports: [
    CommonModule,
    ChatModule,
    ChatNavRoutingModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [
    ChatNavComponent,
    JoinChatComponent,
  ],
  exports: [ChatNavComponent]
})
export class ChatNavModule {
}
