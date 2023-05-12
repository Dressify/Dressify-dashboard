import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagementRoutingModule } from './admin-management-routing.module';
import {CreateAdminComponent} from "./create-admin/create-admin.component";
import {SharedModule} from "../../../shared/shared.module";
import {NgxDropzoneModule} from "ngx-dropzone";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
      CreateAdminComponent,

  ],
  imports: [
    CommonModule,
    AdminManagementRoutingModule,
    SharedModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AdminManagementModule { }
