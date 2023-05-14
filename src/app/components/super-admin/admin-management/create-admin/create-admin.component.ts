import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent implements OnInit {
  files2: File[] = [];
  createAdminForm: FormGroup;

  public validate = false;
  public show: boolean = false;
  public errors?: any = {}

  constructor(private fb:FormBuilder, private sadmin: SadminService, private toastr: ToastrService) {
    this.createAdminForm = this.fb.group({
      adminName :['',Validators.required],
      email :['',[Validators.required, Validators.email]],
      password : ['',Validators.required],
      photo: ['', Validators.required]
    });
  }
    
  ngOnInit(): void {
  }

  onSelect2(event: any) {
    console.log(event.addedFiles[0])
    this.createAdminForm.controls['photo'].setValue(event.addedFiles[0])
    this.files2.push(...event.addedFiles);
  }

  onRemove2(event: any){
    this.files2.splice(this.files2.indexOf(event), 1);
  }

  showPassword() {
    this.show = !this.show;
  }

  onSubmit(){
    this.validate = true;
    console.log(this.createAdminForm)
    console.log(this.createAdminForm?.get('adminName')?.errors)
    console.log(this.createAdminForm.valid)
    if(this.createAdminForm.valid){
      this.validate = false
      const formData = new FormData();
      formData.append('AdminName', this.createAdminForm.value['adminName']);
      formData.append('Email', this.createAdminForm.value['email']);
      formData.append('Password', this.createAdminForm.value['password']);
      formData.append('photo', this.createAdminForm.value['photo']);

      this.sadmin.createAdmin(formData).subscribe(value => {
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
    this.files2.splice(0, 1)
    this.validate = false
    this.errors = {}
  }
}
