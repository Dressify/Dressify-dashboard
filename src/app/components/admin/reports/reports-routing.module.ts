import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllReportsComponent} from "./all-reports/all-reports.component";
import {AllNewReportsComponent} from "./all-new-reports/all-new-reports.component";

const routes: Routes = [
  {
    path: 'all-reports', component: AllReportsComponent
  },
  {
    path: 'all-new-reports', component: AllNewReportsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
