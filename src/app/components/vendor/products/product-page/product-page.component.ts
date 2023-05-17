import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {VendorService} from "../../../../shared/services/vendor/vendor.service";
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../shared/interface/product/product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  rating = 4 ;
  product: Product

  updateQuanitity:FormGroup

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

  constructor(public config: NgbRatingConfig, private vendor:VendorService, private route:ActivatedRoute, private fb:FormBuilder, private router:Router) {
    config.max = 5;
    config.readonly = true;

    this.updateQuanitity = this.fb.group({
      productId: ['', Validators.required],
      quantity :[0 ,Validators.required]
    });
  }


  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const params = new HttpParams()
          .set('id', id)
      this.vendor.getProduct(params).subscribe(data =>{
        this.product = data.product
        console.log(this.product)
        this.updateQuanitity.get('productId')?.setValue(data.product.productId)
      },error => {
        console.log(error)
        this.router.navigate(['./vendor'])
      })

    }
    else{
      // TODO Navigate to not found
      console.log("i'm in else")
      this.router.navigate(['./vendor'])
    }
  }

  onSubmit(){
    console.log(this.updateQuanitity)
    if(this.updateQuanitity.valid){
      let params = new HttpParams()
          .set('productId', this.updateQuanitity.value['productId'])
          .set('quantity', this.updateQuanitity.value['quantity'])

      console.log(params)
      this.vendor.updateQuantity(params).subscribe(data => {
        console.log(data)
        this.getProduct()
      }, error => {
        console.log(error)
      }
    )
  }}
}
