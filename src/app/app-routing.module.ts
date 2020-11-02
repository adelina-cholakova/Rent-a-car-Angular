import { RentsComponent } from './rents/rents.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CustomersComponent } from './customers/customers.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'rents', component: RentsComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
