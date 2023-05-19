import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/shared/interface/user/user';
import { SalesService } from 'src/app/shared/services/sales/sales.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit{
  salesProfile:Sales;
  constructor(private sales:SalesService){
    this.salesProfile ={
      address:'',
      fName:'',
      lName:'',
      email:'',
      imgUrl:'',
      phone:'',
      nId:'',
      phoneNumber:'',
      salesName:'',
      storeName:'',
      userName:''

    }
  }
  ngOnInit(): void {
    this.sales.viewSalesProfile().subscribe((data)=>{
      this.salesProfile = data;
      console.log(this.salesProfile);
    })
  }
}
