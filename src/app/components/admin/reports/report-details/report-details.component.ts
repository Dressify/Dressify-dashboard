import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {VendorService} from "../../../../shared/services/vendor/vendor.service";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../shared/interface/product/product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../shared/services/admin/admin.service";
import {DatePipe} from "@angular/common";
import {data} from "../../../../shared/data/search-website/images";
import {products} from "../../../../shared/data/components/widgest/general/general";
import {Report} from "../../../../shared/interface/admin/admin";
import {Vendor} from "../../../../shared/interface/user/user";



@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit, OnDestroy {
  rating = 4 ;

  report: Report
  product: Product
  vendor: Vendor

  validate: boolean = false

  suspendedUntil: NgbDateStruct;
  placement = 'bottom';
  fromDate: NgbDate;
  toDate: NgbDate | null;

  reportActions = [
    {value: 'ignore', name: 'Ignore'},
    {value: 'suspendProduct', name: 'Suspend Product'},
    {value: 'suspendVendor', name: 'Suspend Vendor'}
  ];
  selectedCity: any;

  Actions:FormGroup

  constructor(private route:ActivatedRoute,
              private fb:FormBuilder,
              private router:Router,
              private admin: AdminService,
              private calendar: NgbCalendar,
              private datePipe: DatePipe) {

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.Actions = this.fb.group({
      reportId: ['', Validators.required],
      action: [null, Validators.required],
    });
  }


  ngOnInit(): void {
    this.getReport()
  }

  getReport(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const params = new HttpParams()
          .set('reportId', id)

      this.admin.getReportDetails(params).subscribe(data =>{
        if(data){
          this.report = data
          this.product = data.product
          this.vendor = data.vendor
          console.log(this.report)
          this.Actions.get('reportId')?.setValue(data.reportId)
        }
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

  changeForm(){
    this.validate = false
    if (this.Actions.get('action')?.value === 'suspendProduct' || this.Actions.get('action')?.value === 'suspendVendor'){
      const id = this.Actions.get('reportId')?.value
      const action = this.Actions.get('action')?.value

      this.Actions = this.fb.group({
        reportId: [id, Validators.required],
        action: [action, Validators.required],
        reason: [''],
        suspendedUntil :['', Validators.required]
      })
    }else{
      const id = this.Actions.get('reportId')?.value
      const action = this.Actions.get('action')?.value

      this.Actions = this.fb.group({
        reportId: [id, Validators.required],
        action: [action, Validators.required]
      })
    }
  }

  onSubmit(){
    this.validate = true
    const formattedDate = this.formatDate(this.suspendedUntil);
    console.log(formattedDate)
    this.Actions.get('suspendedUntil')?.setValue(formattedDate)
    console.log(this.Actions.value)

    if(this.Actions.valid){
      console.log(this.Actions.value)
      this.admin.actionReport(this.Actions.value).subscribe(data => {
        console.log(data)
        this.getReport()
      }, error => {
        console.log(error)
      })
    }
  }

  ngOnDestroy(): void {
    if(!this.report.reportStatus){
      const params = new HttpParams()
          .set('reportId', this.Actions.value['reportId'])

      this.admin.checkReport(params).subscribe(data => {
        console.log(data)
      }, error => {
        console.log(error)
      })
    }
  }
}
