import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {NgxDropzoneModule} from "ngx-dropzone";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CarouselModule} from "ngx-owl-carousel-o";
import {AllProductsComponent} from "./all-products/all-products.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {AllSuspendedProductsComponent} from "./all-suspended-products/all-suspended-products.component";
import {ReportedProductsComponent} from "./reported-products/reported-products.component";


@NgModule({
  declarations: [
      AllProductsComponent,
      ProductPageComponent,
      AllSuspendedProductsComponent,
      ReportedProductsComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    SharedModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule
  ],
  providers: [DatePipe]
})
export class ProductManagementModule { }
