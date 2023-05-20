import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorManagementRoutingModule } from './vendor-management-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AllVendorsComponent} from "./all-vendors/all-vendors.component";


@NgModule({
  declarations: [
      AllVendorsComponent
  ],
  imports: [
    CommonModule,
    VendorManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class VendorManagementModule { }
