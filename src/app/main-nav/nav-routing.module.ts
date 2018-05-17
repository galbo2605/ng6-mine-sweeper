import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const navRoutes = [
  {path: 'mine-sweeper', loadChildren: './mine-sweeper/mine-sweeper.module#MineSweeperModule'},
  {path: 'employees', loadChildren: './employees/employees.module#EmployeesModule'},
  {path: 'customers', loadChildren: './customers/customers.module#CustomersModule'}
];
@NgModule({
  imports: [RouterModule.forChild(navRoutes)],
  exports: [RouterModule]
})
export class NavRoutingModule {
}
