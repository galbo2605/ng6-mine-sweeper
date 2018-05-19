import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {QuestionsComponent} from './questions/questions.component';

const navRoutes = [
  {path: 'mine-sweeper', loadChildren: './mine-sweeper/mine-sweeper.module#MineSweeperModule'},
  {path: 'boom-stats', loadChildren: './boom-stats/boom-stats.module#BoomStatsModule'},
  {path: 'custom-photo', loadChildren: './custom-photo/custom-photo.module#CustomPhotoModule'},
  {path: 'questions', component: QuestionsComponent},
  {path: '**', redirectTo: 'mine-sweeper'},
];

@NgModule({
  imports: [RouterModule.forChild(navRoutes)],
  exports: [RouterModule]
})
export class NavRoutingModule {
}
