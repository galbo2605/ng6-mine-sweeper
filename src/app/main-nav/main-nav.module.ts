import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavRoutingModule} from './nav-routing.module';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  imports: [
    CommonModule,
    NavRoutingModule,
  ],
  declarations: [QuestionsComponent]
})
export class MainNavModule { }
