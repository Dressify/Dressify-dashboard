import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import { productList } from 'src/app/shared/interface/product';
import { ProductListDirective, SortEvent } from 'src/app/shared/directive/product-list.directive';
import * as data from '../../../../shared/data/e-commerce/product-list'
import { ProductListService } from 'src/app/shared/services/product/product-list.service';
import {admin, ProductsWithAvgRates} from "../../../../shared/interface/admin/admin";
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {HttpParams} from "@angular/common/http";
import {paginationStateAdvanced} from "../../../../shared/interface/pagination";
import {Product} from "../../../../shared/interface/product/product";
import {VendorService} from "../../../../shared/services/vendor/vendor.service";
import {products} from "../../../../shared/data/components/widgest/general/general";
import {AdminService} from "../../../../shared/services/admin/admin.service";
@Component({
  selector: 'app-all-products',
  templateUrl: './reported-products.component.html',
  styleUrls: ['./reported-products.component.scss']
})
export class ReportedProductsComponent {

  paginationState: paginationStateAdvanced = {
    page: 1,
    pageSize: 5,
    searchTerm: '',
    reportCountThreshold: null
  };

  products: Product[]
  total: number

  constructor(private admin: AdminService) {
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
        .set('PageNumber', this.paginationState.page)
        .set('PageSize', this.paginationState.pageSize)

    if (this.paginationState.searchTerm !== ''){
      params = params.set('SearchTerm', this.paginationState.searchTerm)
    }

    if (this.paginationState.reportCountThreshold !== null){
      params = params.set('reportCountThreshold', this.paginationState.reportCountThreshold)
    }

    console.log(params)
    console.log(this.paginationState)

    this.admin.productsNeedToPunch(params).subscribe(data => {
      console.log(data)
      if(data){
        this.products = data.products
        console.log(this.products)
        this.total = data.count
      }

    }, error => {
      console.log(error)
    })
  }
}
