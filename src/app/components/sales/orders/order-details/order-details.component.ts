import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {VendorService} from "../../../../shared/services/vendor/vendor.service";
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../shared/interface/product/product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Order} from "../../../../shared/interface/user/user";
import {SalesService} from "../../../../shared/services/sales/sales.service";



@Component({
  selector: 'app-product-page',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  rating = 4 ;
  product: Product
  order: Order

  owlcarousel2ptions = {
    center: true,
    loop: true,
    margin: 10,
    items: 1,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  }

  constructor(public config: NgbRatingConfig, private sales:SalesService, private route:ActivatedRoute, private router:Router) {
    config.max = 5;
    config.readonly = true;
  }


  ngOnInit(): void {
    this.getOrder()
  }

  getOrder(){
    const orderId = this.route.snapshot.paramMap.get('orderId');
    const productId = this.route.snapshot.paramMap.get('productId');
    if(orderId && productId){
      const params = new HttpParams()
          .set('orderId', orderId)
          .set('productId', productId)

      this.sales.getOrderDetails(params).subscribe(data =>{
        this.order = data
        this.product = data.product
        console.log(this.order)
        console.log(this.product)
      },error => {
        console.log(error)
        this.router.navigate(['./sales'])
      })

    }
    else{
      this.router.navigate(['./sales'])
    }
  }

  confirmOrder(){
    const params = new HttpParams()
        .set('orderId', this.order.orderId)
        .set('productId', this.product.productId)

    this.sales.confirmOrder(params).subscribe(data =>{
      console.log(data)
      this.getOrder()
    },error => {
      console.log(error)
    })
  }
}
