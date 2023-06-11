import { Component, OnInit } from '@angular/core';
import {VendorService} from "../../../shared/services/vendor/vendor.service";
import {Vendor} from "../../../shared/interface/user/user";
@Component({
  selector: 'app-ecommerce',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  quote: string = "Vendors are the architects of possibility, the artisans of innovation, and the catalysts of transformation. With their unique offerings, they paint the canvas of success, delivering excellence and forging lasting partnerships that elevate businesses to new heights."
  vendorProfile:Vendor;
  constructor(private vendor:VendorService) { }
  
  ngOnInit(): void {
    this.vendor.getVendorProfile().subscribe((data)=>{
      this.vendorProfile = data;
      console.log(this.vendorProfile);
    })
  }

  

}
