import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateSalesComponent} from "./create-sales/create-sales.component";
import {AllSalesComponent} from "./all-sales/all-sales.component";
import {SalesDetailsComponent} from "./sales-details/sales-details.component";

const routes: Routes = [
  {
    path: 'create-sales', component: CreateSalesComponent
  },
  {
    path: 'all-sales', component: AllSalesComponent
  },
  {
    path: 'sales/:id', component: SalesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesManagementRoutingModule { }
