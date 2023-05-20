import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllVendorsComponent} from "./all-vendors/all-vendors.component";

const routes: Routes = [
  {
    path: 'all-vendors', component: AllVendorsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorManagementRoutingModule { }
