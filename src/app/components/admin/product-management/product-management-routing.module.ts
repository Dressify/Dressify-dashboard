import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllProductsComponent} from "./all-products/all-products.component";
import {ProductPageComponent} from "./product-page/product-page.component";

const routes: Routes = [
  {
    path: 'all-products',
    component: AllProductsComponent
  },
  {
    path: 'product-details/:id',
    component: ProductPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
