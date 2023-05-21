import { Component, OnInit } from '@angular/core';
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {admin} from "../../../../shared/interface/admin/admin";
import {NgbCalendar, NgbDate, NgbDateStruct, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Sales, Vendor} from "../../../../shared/interface/user/user";
import {AdminService} from "../../../../shared/services/admin/admin.service";
import {DatePipe} from "@angular/common";
import {Product} from "../../../../shared/interface/product/product";

@Component({
  selector: 'app-admin-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {
  vendor: Vendor
  suspendVendor:FormGroup

  suspendedUntil: NgbDateStruct;
  placement = 'bottom';
  fromDate: NgbDate;
  toDate: NgbDate | null;

  public validate = false;
  public errors?: any = {}

  constructor(private admin: AdminService,
              private route: ActivatedRoute,
              private fb:FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private calendar: NgbCalendar,
              private datePipe: DatePipe) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.suspendVendor = this.fb.group({
      vendorId: ['', Validators.required],
      reason: [''],
      suspendedUntil :['' ,Validators.required]
    });
  }

  ngOnInit(): void {
    this.getVendorDetails()
  }

  formatDate(dateObject: any): string {
    if(!dateObject)
      return '';

    const date = new Date(dateObject.year, dateObject.month - 1, dateObject.day); // Note: Month is 0-based in JavaScript Dates
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  getVendorDetails(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const headers = new HttpHeaders()
          .set('VendorId', id)
      this.admin.getVendorDetails(headers).subscribe(data =>{
        console.log(data)
        this.vendor = data
        this.suspendVendor.get('vendorId')?.setValue(data.vendorID)
      },error => {
        console.log(error)
        this.router.navigate(['./admin'])
      })

    }
    else{
      this.router.navigate(['./admin'])
    }
  }

  suspendVendorAction(){
    this.validate = true
    const formattedDate = this.formatDate(this.suspendedUntil);
    console.log(formattedDate)
    this.suspendVendor.get('suspendedUntil')?.setValue(formattedDate)
    console.log(this.suspendVendor.value)

    if(this.suspendVendor.valid){
      // const params = new HttpParams()
      //     .set('productId', this.suspendProduct.value['productId'])
      //     .set('reason', this.suspendProduct.value['reason'])
      //     .set('suspendedUntil', this.suspendProduct.value['suspendedUntil'])

      console.log(this.suspendVendor.value)
      this.admin.suspendVendor(this.suspendVendor.value).subscribe(data => {
        console.log(data)
        this.getVendorDetails()
      }, error => {
        console.log(error)
      })
    }
  }

  unsuspendVendor(){
    const params = new HttpParams()
        .set('VendorId', this.suspendVendor.value['vendorId'])

    console.log(params)
    this.admin.unsuspendVendor(params).subscribe(data => {
      console.log(data)
      this.getVendorDetails()
    }, error => {
      console.log(error)
    })
  }

  onSubmit(){
    if(this.vendor.isSuspended){
      this.unsuspendVendor()
    }
    if(!this.vendor.isSuspended){
      this.suspendVendorAction()
    }
  }

}
