import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public userName: string;
  public profileImg: 'assets/images/dashboard/profile.jpg';

  constructor(public auth:AuthService, private router:Router) {

  }
  ngOnInit(): void {
  }

  logOut(){
    const role = sessionStorage.getItem('role')
    this.auth.logOut();

    if(role === "SuperAdmin" || role === "Admin"){
      this.router.navigate(['/auth/adminLogin']);
      return;
    }

    if(role === "Vendor" || role === "Sales"){
      this.router.navigate(['/auth/login']);
      return;
    }
  }

}
