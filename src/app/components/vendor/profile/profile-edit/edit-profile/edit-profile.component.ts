import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/shared/services/vendor/vendor.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  updateVendor:FormGroup;
  constructor(private fb:FormBuilder,private vendor:VendorService,private router:Router) { }

  ngOnInit(): void {
    this.updateVendor = this.fb.group({
      address: [''],
      fName: [''],
      lName: [''],
      email: ['',Validators.email],
      userName: [''] ,
      imgUrl: [''],
      phoneNumber: ['']
    });
    this.vendor.getVendorProfile().subscribe((data)=>{
      this.updateVendor = this.fb.group({
        address: [data['address']],
        fName: [data['fName']],
        lName: [data['lName']],
        email: [data['email'],Validators.email],
        userName: [data['userName']],
        imgUrl: [data['imgUrl']],
        phoneNumber: [data['phoneNumber']]
      });
    })
  }
  updateVendorProfile(){
    if(this.updateVendor.valid){
      this.vendor.editVendorProfile(this.updateVendor.value).subscribe(()=>{
        console.log('user updated');
        this.router.navigate(['/vendor/profile']);
      })
    }
  }

}
