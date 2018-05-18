import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {QuestionsComponent} from './questions/questions.component';

const navRoutes = [
  {path: 'mine-sweeper', loadChildren: './mine-sweeper/mine-sweeper.module#MineSweeperModule'},
  {path: 'boom-stats', loadChildren: './employees/employees.module#EmployeesModule'},
  {path: 'custom-photo', loadChildren: './customers/customers.module#CustomersModule'},
  {path: 'questions', component: QuestionsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(navRoutes)],
  exports: [RouterModule]
})
export class NavRoutingModule {
}
