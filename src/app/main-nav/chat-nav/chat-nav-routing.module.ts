import {JoinChatComponent} from './join-chat/join-chat.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import {ChatNavGuard} from './chat-nav.guard';

const chatNavRouting = [
  {path: '', component: JoinChatComponent, outlet: 'chatRouter'},
  {path: 'room', component: ChatComponent, outlet: 'chatRouter', canActivate: [ChatNavGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(chatNavRouting)],
  providers: [ChatNavGuard],
  exports: [RouterModule]
})
export class ChatNavRoutingModule {
}
