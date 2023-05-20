import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {VendorService} from "../../../../shared/services/vendor/vendor.service";
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../shared/interface/product/product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../shared/services/admin/admin.service";
import {DatePipe} from "@angular/common";
import {data} from "../../../../shared/data/search-website/images";
import {products} from "../../../../shared/data/components/widgest/general/general";



@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  rating = 4 ;
  product: Product
  validate: boolean = false

  suspendedUntil: NgbDateStruct;
  placement = 'bottom';
  fromDate: NgbDate;
  toDate: NgbDate | null;

  suspendProduct:FormGroup

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

  constructor(public config: NgbRatingConfig,
              private vendor:VendorService,
              private route:ActivatedRoute,
              private fb:FormBuilder,
              private router:Router,
              private admin: AdminService,
              private calendar: NgbCalendar,
              private datePipe: DatePipe) {
    config.max = 5;
    config.readonly = true;

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.suspendProduct = this.fb.group({
      productId: ['', Validators.required],
      reason: [''],
      suspendedUntil :['' ,Validators.required]
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
        this.suspendProduct.get('productId')?.setValue(data.product.productId)
      },error => {
        console.log(error)
        this.router.navigate(['./admin'])
      })

    }
    else{
      this.router.navigate(['./admin'])
    }
  }

  formatDate(dateObject: any): string {
    if(!dateObject)
      return '';

    const date = new Date(dateObject.year, dateObject.month - 1, dateObject.day); // Note: Month is 0-based in JavaScript Dates
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  suspendProductAction(){
    this.validate = true
    const formattedDate = this.formatDate(this.suspendedUntil);
    console.log(formattedDate)
    this.suspendProduct.get('suspendedUntil')?.setValue(formattedDate)

    if(this.suspendProduct.valid){
      // const params = new HttpParams()
      //     .set('productId', this.suspendProduct.value['productId'])
      //     .set('reason', this.suspendProduct.value['reason'])
      //     .set('suspendedUntil', this.suspendProduct.value['suspendedUntil'])

      console.log(this.suspendProduct.value)
      this.admin.suspendProduct(this.suspendProduct.value).subscribe(data => {
        console.log(data)
        this.getProduct()
      }, error => {
        console.log(error)
      })
    }
  }

  unsuspendProduct(){
    const params = new HttpParams()
        .set('productId', this.suspendProduct.value['productId'])

    console.log(params)
    this.admin.unsuspendProduct(params).subscribe(data => {
      console.log(data)
      this.getProduct()
    }, error => {
      console.log(error)
    })
  }

  onSubmit(){
    if(this.product.isSuspended){
      this.unsuspendProduct()
    }
    if(!this.product.isSuspended){
      this.suspendProductAction()
    }
  }
}
