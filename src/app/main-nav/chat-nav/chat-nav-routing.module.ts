import {JoinChatComponent} from './join-chat/join-chat.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import {ChatNavGuard} from './chat-nav.guard';
import {ChatMembersComponent} from './chat/chat-members/chat-members.component';
import {ChatMessengerComponent} from './chat/chat-messenger/chat-messenger.component';

const chatNavRouting = [
  {path: '', component: JoinChatComponent, outlet: 'chat'},
  {
    path: 'room', component: ChatComponent, outlet: 'chat', canActivate: [ChatNavGuard], children: [
      {path: '', component: ChatMessengerComponent, outlet: 'room'},
      {path: 'members', component: ChatMembersComponent, outlet: 'room'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(chatNavRouting)],
  providers: [ChatNavGuard],
  exports: [RouterModule]
})
export class ChatNavRoutingModule {
}
