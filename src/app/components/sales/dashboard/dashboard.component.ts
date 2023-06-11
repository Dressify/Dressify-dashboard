import { Component, OnInit } from '@angular/core';
import {Sales} from "../../../shared/interface/user/user";
import {SalesService} from "../../../shared/services/sales/sales.service";
@Component({
  selector: 'app-ecommerce',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  quote: string = "Sales is the art of weaving connections, the science of understanding needs, and the power to inspire action. Through genuine relationships and persuasive prowess, sales professionals ignite possibilities, turning prospects into loyal advocates and dreams into tangible realities."
  salesProfile:Sales;
  constructor(private sales:SalesService) { }
  
  ngOnInit(): void {
    this.sales.viewSalesProfile().subscribe((data)=>{
      this.salesProfile = data;
      console.log(this.salesProfile);
    })
  }

  

}
