import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomPhotoComponent} from './custom-photo.component';
import {CustomPhotoRoutingModule} from './custom-photo-routing.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CustomPhotoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    CustomPhotoComponent
  ]
})
export class CustomPhotoModule { }
