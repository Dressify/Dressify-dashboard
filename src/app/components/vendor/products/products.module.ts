import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AllProductsComponent } from "./all-products/all-products.component";
import { ProductQuestionsComponent } from './product-questions/product-questions.component';
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductQuestionsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class ProductsModule { }
