import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EmployeesComponent} from './employees.component';

const employeesRoutes = [
  {path: '', component: EmployeesComponent},
];
@NgModule({
  imports: [RouterModule.forChild(employeesRoutes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {
}
