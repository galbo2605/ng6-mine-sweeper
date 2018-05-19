import {JoinChatComponent} from './join-chat/join-chat.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ChatComponent} from './chat/chat.component';

const chatNavRouting = [
  {path: '', component: JoinChatComponent, outlet: 'chatRouter'},
  {path: 'room', component: ChatComponent, outlet: 'chatRouter'},
];

@NgModule({
  imports: [RouterModule.forChild(chatNavRouting)],
  exports: [RouterModule]
})
export class ChatNavRoutingModule {
}
