import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {count, Observable} from 'rxjs';
import { productList } from 'src/app/shared/interface/product';
import { ProductListDirective, SortEvent } from 'src/app/shared/directive/product-list.directive';
import * as data from '../../../../shared/data/e-commerce/product-list'
import { ProductListService } from 'src/app/shared/services/product/product-list.service';
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {paginationState} from "../../../../shared/interface/pagination";
import {admin, Report} from "../../../../shared/interface/admin/admin";
import {HttpParams} from "@angular/common/http";
import * as events from "events";
import {Sales, Vendor} from "../../../../shared/interface/user/user";
import {SalesService} from "../../../../shared/services/sales/sales.service";
import {AdminService} from "../../../../shared/services/admin/admin.service";
@Component({
  selector: 'app-all-new-reports',
  templateUrl: './all-new-reports.component.html',
  styleUrls: ['./all-new-reports.component.scss']
})
export class AllNewReportsComponent implements OnInit{

  paginationState: paginationState = {
    page: 1,
    pageSize: 5,
    searchTerm: ''
  };

  reports: Report[]
  total: number

  constructor(private admin: AdminService) {
  }

  ngOnInit(): void {
    this.getReports()
  }

  onPageChange(e:number){
    this.paginationState.page = e;
    this.getReports();
  }

  getReports(){
    const params = new HttpParams()
        .set('PageNumber', this.paginationState.page)
        .set('PageSize', this.paginationState.pageSize)

    console.log(params)
    console.log(this.paginationState)

    this.admin.listUncheckedReports(params).subscribe(data => {
      if(data){
        this.reports = data.productReports
        this.total = data.count
      }else{
        this.reports = []
      }
    }, error => {
      console.log(error)
    })
  }
}
