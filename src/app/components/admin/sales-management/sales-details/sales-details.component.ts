import { Component, OnInit } from '@angular/core';
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {admin} from "../../../../shared/interface/admin/admin";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Sales} from "../../../../shared/interface/user/user";
import {AdminService} from "../../../../shared/services/admin/admin.service";

@Component({
  selector: 'app-admin-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss']
})
export class SalesDetailsComponent implements OnInit {
  files2: File[] = [];
  sales?: Sales
  editProfile: FormGroup

  public validate = false;
  public errors?: any = {}

  constructor(private admin: AdminService,
              private route: ActivatedRoute,
              private fb:FormBuilder,
              private toastr: ToastrService,
              private router: Router) {
    this.editProfile = this.fb.group({
      salesId :['',Validators.required],
      salesName :['',Validators.required],
      email :['',[Validators.required, Validators.email]],
      nId :['',Validators.required],
      fName :[''],
      lName :[''],
    });
  }

  ngOnInit(): void {
    this.getSalesDetails()
  }

  getSalesDetails(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const headers = new HttpHeaders()
          .set('SalesId', id)
      this.admin.getSalesDetails(headers).subscribe(data =>{
        this.sales = data
        this.editProfile.get('salesId')?.setValue(data.salesId)
        this.editProfile.get('salesName')?.setValue(data.salesName)
        this.editProfile.get('email')?.setValue(data.email)
        this.editProfile.get('nId')?.setValue(data.nId)
        this.editProfile.get('fName')?.setValue(data.fName)
        this.editProfile.get('lName')?.setValue(data.lName)
      },error => {
        console.log(error)
        this.router.navigate(['./admin'])
      })

    }
    else{
      this.router.navigate(['./admin'])
    }
  }

  onSubmit(){
    this.validate = true;
    if(this.editProfile.valid){
      this.validate = true

      this.admin.editSales(this.editProfile.value).subscribe(value => {
        console.log(value)
        this.errors = {}
        this.getSalesDetails()
        this.toastr.success("Admin Account is Updated successfully", "Success!", {
          timeOut: 3000,
          closeButton: true,
        });
      },error => {
        this.errors = {}
        console.log()
        if(error?.error?.errors)
          this.errors = error?.error?.errors;

        let errorLog: string = "failed"
        if(typeof(error?.error) == "string")
          errorLog = error?.error
        if(typeof(error?.error) == "object")
          errorLog = error?.error?.title

        this.toastr.error(errorLog, "Failed!", {
          timeOut: 3000,
          closeButton: true,
        });
      })
    }
  }

}
