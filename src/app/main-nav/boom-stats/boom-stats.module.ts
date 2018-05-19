import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoomStatsComponent} from './boom-stats.component';
import {BoomStatsRoutingModule} from './boom-stats-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BoomStatsRoutingModule
  ],
  declarations: [
    BoomStatsComponent
  ]
})
export class BoomStatsModule { }
