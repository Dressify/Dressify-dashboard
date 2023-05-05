import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from "./add-product/add-product.component";
import {AllProductsComponent} from "./all-products/all-products.component";
import {ProductQuestionsComponent} from "./product-questions/product-questions.component";

const routes: Routes = [
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then((m) => m.AddProductModule)
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
