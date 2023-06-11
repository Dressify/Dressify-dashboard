import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import { productList } from 'src/app/shared/interface/product';
import { ProductListDirective, SortEvent } from 'src/app/shared/directive/product-list.directive';
import * as data from '../../../../shared/data/e-commerce/product-list'
import { ProductListService } from 'src/app/shared/services/product/product-list.service';
import {admin} from "../../../../shared/interface/admin/admin";
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {HttpParams} from "@angular/common/http";
import {paginationState} from "../../../../shared/interface/pagination";
import {Product} from "../../../../shared/interface/product/product";
import {VendorService} from "../../../../shared/services/vendor/vendor.service";
import {products} from "../../../../shared/data/components/widgest/general/general";
import {Order} from "../../../../shared/interface/user/user";
import {SalesService} from "../../../../shared/services/sales/sales.service";
import {SharedService} from "../../../../shared/services/shared.service";
@Component({
  selector: 'app-all-products',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss']
})
export class PendingOrdersComponent {

  paginationState: paginationState = {
    page: 1,
    pageSize: 5,
    searchTerm: ''
  };

  orders: Order[]
  total: number

  constructor(private sales: SalesService, private shared:SharedService) {
  }

  ngOnInit(): void {
    this.getOrders()
    this.shared.callMethod()
  }

  onPageChange(e:number){
    this.paginationState.page = e;
    this.getOrders();
  }

  getOrders(){
    const params = new HttpParams()
        .set('PageNumber', this.paginationState.page)
        .set('PageSize', this.paginationState.pageSize)

    console.log(params)
    console.log(this.paginationState)

    this.sales.getPendingOrders(params).subscribe(data => {
      if (data){
        console.log(data)
        this.orders = data.pendingSalesOrders
        console.log(this.orders)
        // console.log(this.orders[0].product.productImages[0].imageUrl)
        this.total = data.count
      }
    }, error => {
      console.log(error)
    })
  }
}
