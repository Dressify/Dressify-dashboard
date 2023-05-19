import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {ToastrService} from "ngx-toastr";
import {AdminService} from "../../../../shared/services/admin/admin.service";

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-sales.component.html',
  styleUrls: ['./create-sales.component.scss']
})
export class CreateSalesComponent implements OnInit {
  createSalesForm: FormGroup;

  public validate = false;
  public show: boolean = false;
  public errors?: any = {}

  constructor(private fb:FormBuilder, private admin: AdminService, private toastr: ToastrService) {
    this.createSalesForm = this.fb.group({
      SalesName :['',Validators.required],
      Email :['',[Validators.required, Validators.email]],
      Password : ['',Validators.required],
      NId : ['', Validators.required],
      FName : [''],
      LName : [''],
    });
  }
    
  ngOnInit(): void {
  }

  showPassword() {
    this.show = !this.show;
  }
  addInput(controlName: string, e:Event){
    // console.log((e.target as HTMLSelectElement).value)
    this.createSalesForm.get(controlName)?.patchValue((e.target as HTMLInputElement).value)
  }

  onSubmit(){
    this.validate = true;
    console.log(this.createSalesForm)
    console.log(this.createSalesForm?.get('adminName')?.errors)
    console.log(this.createSalesForm.valid)
    if(this.createSalesForm.valid){
      this.validate = false
      const formData = new FormData();
      formData.append('SalesName', this.createSalesForm.value['SalesName']);
      formData.append('Email', this.createSalesForm.value['Email']);
      formData.append('Password', this.createSalesForm.value['Password']);
      formData.append('NId', this.createSalesForm.value['NId']);
      formData.append('FName', this.createSalesForm.value['FName']);
      formData.append('LName', this.createSalesForm.value['LName']);

      console.log(formData)

      this.admin.createSales(formData).subscribe(value => {
        this.errors = {}
        this.toastr.success("Admin Account is Created successfully", "Success!", {
          timeOut: 3000,
          closeButton: true,
        });
      },error => {
        this.errors = {}

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

  reset(){
    this.validate = false
    this.errors = {}
  }
}
