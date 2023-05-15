import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  path:string = '';

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    const role = this.auth.getUserRole();
    if(role === 'SuperAdmin'){
      this.path = '/super-admin'
      return;
    }

    if(role === 'Admin'){
      this.path = '/admin'
      return;
    }

    if(role === 'Vendor'){
      this.path = '/vendor'
      return;
    }

    if(role === 'Sales'){
      this.path = '/sales'
      return;
    }
  }

}
