import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerlistComponent },
  { path: 'addcust', component: AddcustomerComponent },
  { path: 'update/:id', component: UpdatecustomerComponent },
  { path: 'details/:id', component: ViewcustomerComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
