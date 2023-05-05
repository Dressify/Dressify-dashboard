import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductRoutingModule } from './add-product-routing.module';
import {AddProductComponent} from "./add-product.component";
import {DescriptionCategoryComponent} from "./description-category/description-category.component";
import {SizeImageComponent} from "./size-image/size-image.component";
import {SharedModule} from "../../../../shared/shared.module";
import {NgxDropzoneModule} from "ngx-dropzone";

// TODO Ask ChatGPT about this module nessecity
@NgModule({
  declarations: [AddProductComponent, DescriptionCategoryComponent, SizeImageComponent],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    SharedModule,
    NgxDropzoneModule
  ]
})
export class AddProductModule { }
