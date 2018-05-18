import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavRoutingModule} from './nav-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import {ContentDelegationService} from './content-delegation.service';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    NavRoutingModule,
  ],
  declarations: [QuestionsComponent],
  providers: [ContentDelegationService]
})
export class MainNavModule { }
