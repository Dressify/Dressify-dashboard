import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {count, Observable} from 'rxjs';
import { productList } from 'src/app/shared/interface/product';
import { ProductListDirective, SortEvent } from 'src/app/shared/directive/product-list.directive';
import * as data from '../../../../shared/data/e-commerce/product-list'
import { ProductListService } from 'src/app/shared/services/product/product-list.service';
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {paginationState} from "../../../../shared/interface/pagination";
import {admins} from "../../../../shared/interface/SuperAdmin/admin";
import {HttpParams} from "@angular/common/http";
import * as events from "events";
@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.component.html',
  styleUrls: ['./all-admins.component.scss']
})
export class AllAdminsComponent implements OnInit{
  products$: Observable<productList[]>;
  total$: Observable<number>;

  public PRODUCTLIST = data.PRODUCTLIST

  paginationState: paginationState = {
    page: 1,
    pageSize: 5,
    searchTerm: ''
  };

  total: number


  @ViewChildren(ProductListDirective) headers: QueryList<ProductListDirective>;

  constructor(private sadmin: SadminService, public service: ProductListService) {
    this.products$ = service.orderList$;
    this.total$ = service.total$;
  }

  admins: admins[]

  ngOnInit(): void {
    this.getAdmins()
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  onPageChange(e:number){
    this.paginationState.page = e;
    this.getAdmins();
  }

  getAdmins(){
    const params = new HttpParams()
        .set('PageNumber', this.paginationState.page)
        .set('PageSize', this.paginationState.pageSize);

    this.sadmin.listAdmins(params).subscribe(data => {
      console.log(data)
      this.admins = data.admins
      this.total = data.count
    }, error => {
      console.log(error)
    })
  }

  protected readonly count = count;
}
