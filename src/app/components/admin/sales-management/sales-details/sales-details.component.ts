import { Component, OnInit } from '@angular/core';
import {SadminService} from "../../../../shared/services/super-admin/sadmin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {admin} from "../../../../shared/interface/admin/admin";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-admin-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss']
})
export class SalesDetailsComponent implements OnInit {
  files2: File[] = [];
  modalRef: NgbModalRef
  admin?: admin
  editProfile: FormGroup

  public validate = false;
  public errors?: any = {}

  constructor(private sadmin: SadminService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private fb:FormBuilder,
              private toastr: ToastrService,
              private router: Router) {
    this.editProfile = this.fb.group({
      adminId :['',Validators.required],
      adminName :['',Validators.required],
      email :['',[Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.getAdminDetails()
  }

  getAdminDetails(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const headers = new HttpHeaders()
          .set('adminId', id)
      this.sadmin.getAdminDetails(headers).subscribe(data =>{
        this.admin = data
        this.editProfile.get('adminId')?.setValue(data.adminId)
        this.editProfile.get('adminName')?.setValue(data.adminName)
        this.editProfile.get('email')?.setValue(data.email)
      },error => {
        console.log(error)
        this.router.navigate(['./super-admin'])
      })

    }
    else{
      this.router.navigate(['./super-admin'])
    }
  }

  onSelect2(event: any) {
    console.log(event.addedFiles[0])
    this.files2.push(...event.addedFiles);
    console.log(this.files2)
  }

  onRemove2(event: any){
    this.files2.splice(this.files2.indexOf(event), 1);
  }

  changePhotoModal(verticallyContent:any){
    this.modalRef = this.modalService.open(verticallyContent, { centered: true });
  }

  changePhoto(){
    const photo:File = this.files2[0]
    const formData = new FormData();
    formData.append('photo', photo);

    const headers = new HttpHeaders()
    if (this.admin?.adminId){
      headers.set('adminId', this.admin?.adminId)
    }

    this.sadmin.modifyAdminPhoto(headers, formData).subscribe(data =>{
      console.log(data)
      this.modalRef.close()
      this.getAdminDetails()
    },error => {
      console.log(error)
    })
  }

  onSubmit(){
    this.validate = true;
    if(this.editProfile.valid){
      this.validate = true

      this.sadmin.editAdmin(this.editProfile.value).subscribe(value => {
        console.log(value)
        this.errors = {}
        this.getAdminDetails()
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
