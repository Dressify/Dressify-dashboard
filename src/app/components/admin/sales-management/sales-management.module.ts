import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesManagementRoutingModule } from './sales-management-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {NgxDropzoneModule} from "ngx-dropzone";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CreateSalesComponent} from "./create-sales/create-sales.component";
import {AllSalesComponent} from "./all-sales/all-sales.component";
import {SalesDetailsComponent} from "./sales-details/sales-details.component";


@NgModule({
  declarations: [
      CreateSalesComponent,
      AllSalesComponent,
      SalesDetailsComponent
  ],
  imports: [
    CommonModule,
    SalesManagementRoutingModule,
    SharedModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class SalesManagementModule { }
