import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from "./add-product/add-product.component";
import {AllProductsComponent} from "./all-products/all-products.component";
import {ProductQuestionsComponent} from "./product-questions/product-questions.component";

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
    path: 'product-questions',
    component: ProductQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
