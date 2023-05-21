import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { VendorManagementRoutingModule } from './vendor-management-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AllVendorsComponent} from "./all-vendors/all-vendors.component";
import {VendorDetailsComponent} from "./vendor-details/vendor-details.component";


@NgModule({
  declarations: [
      AllVendorsComponent,
      VendorDetailsComponent
  ],
  imports: [
    CommonModule,
    VendorManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [DatePipe]
})
export class VendorManagementModule { }
