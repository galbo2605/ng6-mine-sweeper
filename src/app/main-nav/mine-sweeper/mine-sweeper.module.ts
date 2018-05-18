import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MineSweeperComponent} from './mine-sweeper.component';
import {MineSweeperRoutingModule} from './mine-sweeper-routing.module';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatSliderModule, MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MineSweeperRoutingModule,
    MatButtonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [
    MineSweeperComponent
  ]
})
export class MineSweeperModule { }
