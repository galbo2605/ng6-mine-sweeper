import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MineSweeperComponent} from './mine-sweeper.component';

const mineSweeperRoutes = [
  {path: '', component: MineSweeperComponent},
];
@NgModule({
  imports: [RouterModule.forChild(mineSweeperRoutes)],
  exports: [RouterModule]
})
export class MineSweeperRoutingModule {
}
