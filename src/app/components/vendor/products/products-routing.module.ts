import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from "./add-product/add-product.component";
import {AllProductsComponent} from "./all-products/all-products.component";
import {ProductQuestionsComponent} from "./product-questions/product-questions.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {QuestionAnswerComponent} from "./question-answer/question-answer.component";

const routes: Routes = [
  {
    path: 'create-product',
    component: AddProductComponent
  },
  {
    path: 'all-products',
    component: AllProductsComponent
  },
  {
    path: 'product-details/:id',
    component: ProductPageComponent
  },
  {
    path: 'product-questions',
    component: ProductQuestionsComponent
  },
  {
    path: 'question-answer/:id',
    component: QuestionAnswerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
