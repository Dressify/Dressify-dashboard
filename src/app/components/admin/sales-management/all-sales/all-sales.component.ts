import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {count, Observable} from 'rxjs';
import { productList } from 'src/app/shared/interface/product';
import { ProductListDirective, SortEvent } from 'src/app/shared/directive/product-list.directive';
import * as data from '../../../../shared/data/e-commerce/product-list'
import { ProductListService } from 'src/app/shared/services/product/product-list.service';
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {paginationState} from "../../../../shared/interface/pagination";
import {admin} from "../../../../shared/interface/admin/admin";
import {HttpParams} from "@angular/common/http";
import * as events from "events";
import {Sales} from "../../../../shared/interface/user/user";
import {SalesService} from "../../../../shared/services/sales/sales.service";
import {AdminService} from "../../../../shared/services/admin/admin.service";
@Component({
  selector: 'app-all-admins',
  templateUrl: './all-sales.component.html',
  styleUrls: ['./all-sales.component.scss']
})
export class AllSalesComponent implements OnInit{

  paginationState: paginationState = {
    page: 1,
    pageSize: 5,
    searchTerm: ''
  };

  sales: Sales[]
  total: number

  constructor(private admin: AdminService) {
  }

  ngOnInit(): void {
    this.getSales()
  }

  onPageChange(e:number){
    this.paginationState.page = e;
    this.getSales();
  }

  getSales(){
    let params = new HttpParams()

    if (this.paginationState.searchTerm === ''){
      params = params.set('PageNumber', this.paginationState.page)
            .set('PageSize', this.paginationState.pageSize)
    }else{
      params = params.set('PageNumber', this.paginationState.page)
            .set('PageSize', this.paginationState.pageSize)
            .set('SearchTerm', this.paginationState.searchTerm)
    }

    console.log(params)
    console.log(this.paginationState)

    this.admin.listSales(params).subscribe(data => {
      console.log(data)
      this.sales = data.sales
      this.total = data.count
    }, error => {
      console.log(error)
    })
  }
}
