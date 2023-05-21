import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/shared/interface/user/user';
import { VendorService } from 'src/app/shared/services/vendor/vendor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public isProfile = false;
  vendorProfile:Vendor;
  constructor(private vendor:VendorService) { 
    
  }

  ngOnInit(): void {
    this.vendor.getVendorProfile().subscribe((data)=>{
      this.vendorProfile = data;
      console.log(this.vendorProfile);
    })
  }

}
