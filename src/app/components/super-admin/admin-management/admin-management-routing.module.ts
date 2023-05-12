import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAdminComponent} from "./create-admin/create-admin.component";

const routes: Routes = [
  {
    path: 'create-admin', component: CreateAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminManagementRoutingModule { }
