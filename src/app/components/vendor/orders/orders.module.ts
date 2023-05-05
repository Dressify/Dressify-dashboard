import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {OrdersComponent} from "./orders.component";
import {FormsModule} from "@angular/forms";
import {OrderHistoryService} from "../../../shared/services/product/order-history.service";
import {ProductListService} from "../../../shared/services/product/product-list.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from "../../../shared/services/product/product.service";
import {OrderHistoryDirective} from "../../../shared/directive/order-history.directive";


@NgModule({
  declarations: [
      OrdersComponent,
      OrderHistoryDirective
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    FormsModule,
  ],
  // providers:[
  //   NgbActiveModal,
  //   ProductService,
  //   ProductListService,
  //   OrderHistoryService
  // ]
})
export class OrdersModule { }
