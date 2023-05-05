import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./login/login.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [ LoginComponent, AdminLoginComponent ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
