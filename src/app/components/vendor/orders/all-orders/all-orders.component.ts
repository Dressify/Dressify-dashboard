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
@Component({
  selector: 'app-all-products',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent {

  paginationState: paginationState = {
    page: 1,
    pageSize: 5,
    searchTerm: ''
  };

  orders: Order[]
  total: number

  constructor(private vendor: VendorService) {
  }

  ngOnInit(): void {
    this.getOrders()
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

    this.vendor.getOrders(params).subscribe(data => {
      console.log(data)
      this.orders = data.orders
      console.log(this.orders)
      // console.log(this.orders[0].product.productImages[0].imageUrl)
      this.total = data.count
    }, error => {
      console.log(error)
    })
  }
}
