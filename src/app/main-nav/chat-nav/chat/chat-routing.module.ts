import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const chatRouter = [];

@NgModule({
  imports: [RouterModule.forChild(chatRouter)],
  exports: [RouterModule],
})
export class ChatRoutingModule {
}
