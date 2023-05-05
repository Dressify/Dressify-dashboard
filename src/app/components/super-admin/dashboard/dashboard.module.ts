import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from "../../../shared/shared.module";
import {DashboardComponent} from "./dashboard.component";
import {HotSellingProductsComponent} from "./hot-selling-products/hot-selling-products.component";
import {InvoiceOverviewComponent} from "./invoice-overview/invoice-overview.component";
import {OurActivitiesComponent} from "./our-activities/our-activities.component";
import {ProductDiscountComponent} from "./product-discount/product-discount.component";
import {RecentOrdersComponent} from "./recent-orders/recent-orders.component";
import {RevenueByCategoryComponent} from "./revenue-by-category/revenue-by-category.component";
import {SalesStatsComponent} from "./sales-stats/sales-stats.component";
import {SupportComponent} from "./support/support.component";
import {TotalSaleComponent} from "./total-sale/total-sale.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CarouselModule} from "ngx-owl-carousel-o";
import {ChartistModule} from "ng-chartist";
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
      DashboardComponent,
      HotSellingProductsComponent,
      InvoiceOverviewComponent,
      OurActivitiesComponent,
      ProductDiscountComponent,
      RecentOrdersComponent,
      RevenueByCategoryComponent,
      SalesStatsComponent,
      SupportComponent,
      TotalSaleComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CarouselModule,
    NgbModule,
    ChartistModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
