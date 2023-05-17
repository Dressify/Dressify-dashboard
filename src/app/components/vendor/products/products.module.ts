import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AllProductsComponent } from "./all-products/all-products.component";
import { ProductQuestionsComponent } from './product-questions/product-questions.component';
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxDropzoneModule} from "ngx-dropzone";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ProductPageComponent} from "./product-page/product-page.component";
import {CarouselModule} from "ngx-owl-carousel-o";
import {QuestionAnswerComponent} from "./question-answer/question-answer.component";


@NgModule({
  declarations: [
    AddProductComponent,
    AllProductsComponent,
    ProductQuestionsComponent,
    ProductPageComponent,
    QuestionAnswerComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule
  ]
})
export class ProductsModule { }
