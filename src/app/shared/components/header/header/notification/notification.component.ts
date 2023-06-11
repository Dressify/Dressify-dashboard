import { Component, OnInit } from '@angular/core';
import {Order} from "../../../../interface/user/user";
import {HttpParams} from "@angular/common/http";
import {VendorService} from "../../../../services/vendor/vendor.service";
import {AuthService} from "../../../../services/auth/auth.service";
import {SalesService} from "../../../../services/sales/sales.service";
import {Product} from "../../../../interface/product/product";
import {AdminService} from "../../../../services/admin/admin.service";
import {SharedService} from "../../../../services/shared.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  products: Product[]
  orders: Order[]
  total: number

  constructor(public auth: AuthService, private vendor: VendorService, private sales: SalesService, private admin: AdminService,private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getOrders(this.auth.getUserRole())

    this.sharedService.methodCalled$.subscribe(() => {
      this.getOrders(this.auth.getUserRole());
    });
  }

  getOrders(user: string|null){
    const params = new HttpParams()
        // .set('PageNumber', this.paginationState.page)
        // .set('PageSize', this.paginationState.pageSize)

    // console.log(params)
    // console.log(this.paginationState)

    if(user === "Vendor"){
      this.vendor.getPendingOrders(params).subscribe(data => {
        if(data){
          this.orders = data.pendingOrders
          // console.log(this.orders[0].product.productImages[0].imageUrl)
          this.total = data.count
        }
      }, error => {
        console.log(error)
      })
      return;
    }

    if(user === "Sales"){
      this.sales.getPendingOrders(params).subscribe(data => {
        if(data){
          this.orders = data.pendingSalesOrders
          // console.log(this.orders[0].product.productImages[0].imageUrl)
          this.total = data.count
        }
      }, error => {
        console.log(error)
      })
      return;
    }

    if(user === "Admin"){
      this.admin.productsNeedToPunch(params).subscribe(data => {
        if(data){
          this.products = data.products
          // console.log(this.orders[0].product.productImages[0].imageUrl)
          this.total = data.count
        }
      }, error => {
        console.log(error)
      })
      return;
    }

  }

}
