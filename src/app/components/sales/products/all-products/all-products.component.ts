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
import {SalesService} from "../../../../shared/services/sales/sales.service";
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {

  paginationState: paginationState = {
    page: 1,
    pageSize: 5,
    searchTerm: ''
  };

  products: Product[]
  total: number

  constructor(private sales: SalesService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  onPageChange(e:number){
    this.paginationState.page = e;
    this.getProducts();
  }

  getProducts(){
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

    this.sales.listProducts(params).subscribe(data => {
      console.log(data)
      this.products = data.salesProducts
      this.total = data.count
    }, error => {
      console.log(error)
    })
  }
}
