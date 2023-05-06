import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'adminLogin', component: AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
