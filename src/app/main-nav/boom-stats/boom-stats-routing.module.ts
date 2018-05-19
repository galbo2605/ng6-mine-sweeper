import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BoomStatsComponent} from './boom-stats.component';

const boomStatsRoutes = [
  {path: '', component: BoomStatsComponent},
];
@NgModule({
  imports: [RouterModule.forChild(boomStatsRoutes)],
  exports: [RouterModule]
})
export class BoomStatsRoutingModule {
}
