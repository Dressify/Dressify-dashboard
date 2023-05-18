import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrderHistoryService} from "../../../shared/services/product/order-history.service";
import {ProductListService} from "../../../shared/services/product/product-list.service";
import {NgbActiveModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from "../../../shared/services/product/product.service";
import {OrderHistoryDirective} from "../../../shared/directive/order-history.directive";
import {AllOrdersComponent} from "./all-orders/all-orders.component";
import {PendingOrdersComponent} from "./pending-orders/pending-orders.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {CarouselModule} from "ngx-owl-carousel-o";


@NgModule({
  declarations: [
      OrderHistoryDirective,
      AllOrdersComponent,
      PendingOrdersComponent,
      OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule
  ],
  // providers:[
  //   NgbActiveModal,
  //   ProductService,
  //   ProductListService,
  //   OrderHistoryService
  // ]
})
export class OrdersModule { }
