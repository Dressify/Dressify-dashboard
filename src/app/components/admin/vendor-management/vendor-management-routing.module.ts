import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllVendorsComponent} from "./all-vendors/all-vendors.component";
import {VendorDetailsComponent} from "./vendor-details/vendor-details.component";

const routes: Routes = [
  {
    path: 'all-vendors', component: AllVendorsComponent
  },
  {
    path: 'vendor-details/:id', component: VendorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorManagementRoutingModule { }
