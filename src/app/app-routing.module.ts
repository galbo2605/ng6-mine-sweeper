import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {MainNavComponent} from './main-nav/main-nav.component';

const appRoutes = [
  {path: '', component: MainNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
