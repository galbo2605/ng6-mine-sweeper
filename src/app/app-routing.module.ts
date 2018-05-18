import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';

const appRoutes = [
  {path: '**', redirectTo: 'mine-sweeper'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
