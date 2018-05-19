import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavRoutingModule} from './nav-routing.module';
import {QuestionsComponent} from './questions/questions.component';
import {ContentDelegationService} from './shared/content-delegation.service';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule, MatSliderModule,
  MatToolbarModule,
} from '@angular/material';
import {MainNavComponent} from './main-nav.component';
import {ChatNavModule} from './chat-nav/chat-nav.module';

@NgModule({
  declarations: [MainNavComponent, QuestionsComponent],
  exports: [MainNavComponent],
  imports: [
    CommonModule,
    ChatNavModule,
    NavRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule
  ],
  providers: [ContentDelegationService]
})
export class MainNavModule {
}
