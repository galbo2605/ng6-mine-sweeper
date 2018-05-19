import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CustomPhotoComponent} from './custom-photo.component';

const customPhotoRoutes = [
  {path: '', component: CustomPhotoComponent},
];
@NgModule({
  imports: [RouterModule.forChild(customPhotoRoutes)],
  exports: [RouterModule]
})
export class CustomPhotoRoutingModule {
}
