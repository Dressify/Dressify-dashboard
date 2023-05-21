import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import {AllReportsComponent} from "./all-reports/all-reports.component";
import {AllNewReportsComponent} from "./all-new-reports/all-new-reports.component";
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReportDetailsComponent} from "./report-details/report-details.component";
import {CarouselModule} from "ngx-owl-carousel-o";
import {NgSelectModule} from "@ng-select/ng-select";


@NgModule({
  declarations: [
      AllReportsComponent,
      AllNewReportsComponent,
      ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    NgSelectModule
  ],
  providers: [DatePipe]
})
export class ReportsModule { }
