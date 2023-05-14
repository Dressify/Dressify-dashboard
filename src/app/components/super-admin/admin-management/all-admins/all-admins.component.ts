import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {count, Observable} from 'rxjs';
import { productList } from 'src/app/shared/interface/product';
import { ProductListDirective, SortEvent } from 'src/app/shared/directive/product-list.directive';
import * as data from '../../../../shared/data/e-commerce/product-list'
import { ProductListService } from 'src/app/shared/services/product/product-list.service';
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {paginationState} from "../../../../shared/interface/pagination";
import {admin} from "../../../../shared/interface/SuperAdmin/admin";
import {HttpParams} from "@angular/common/http";
import * as events from "events";
@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.component.html',
  styleUrls: ['./all-admins.component.scss']
})
export class AllAdminsComponent implements OnInit{

  paginationState: paginationState = {
    page: 1,
    pageSize: 5,
    searchTerm: ''
  };

  admins: admin[]
  total: number

  constructor(private sadmin: SadminService) {
  }

  ngOnInit(): void {
    this.getAdmins()
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
}
