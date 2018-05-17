import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CustomersComponent} from './customers.component';

const customersRoutes = [
  {path: '', component: CustomersComponent},
];
@NgModule({
  imports: [RouterModule.forChild(customersRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
