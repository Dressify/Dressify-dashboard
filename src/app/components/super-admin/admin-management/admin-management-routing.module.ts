import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAdminComponent} from "./create-admin/create-admin.component";
import {AllAdminsComponent} from "./all-admins/all-admins.component";
import {AdminDetailsComponent} from "./admin-details/admin-details.component";

const routes: Routes = [
  {
    path: 'create-admin', component: CreateAdminComponent
  },
  {
    path: 'all-admins', component: AllAdminsComponent
  },
  {
    path: 'admin/:id', component: AdminDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminManagementRoutingModule { }
