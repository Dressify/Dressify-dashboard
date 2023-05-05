import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then((m) => m.AddProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
