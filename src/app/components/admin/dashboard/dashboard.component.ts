import { Component, OnInit } from '@angular/core';
import {admin} from "../../../shared/interface/admin/admin";
import {AdminService} from "../../../shared/services/admin/admin.service";
@Component({
  selector: 'app-ecommerce',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  adminProfile:admin;
  quote: string = "An admin holds the key to unlocking the potential of a digital kingdom, gracefully balancing authority and empathy, safeguarding order and fostering growth, as they empower users and shape the virtual realm with their unwavering dedication."
  constructor(private admin:AdminService) { }
  
  ngOnInit(): void {
    this.admin.viewAdminProfile().subscribe((data)=>{
      this.adminProfile = data;
      console.log(this.adminProfile);
    })
  }

  

}
