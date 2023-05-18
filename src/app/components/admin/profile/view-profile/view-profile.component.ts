import { Component, OnInit } from '@angular/core';
import { admin } from 'src/app/shared/interface/admin/admin';
import { AdminService } from 'src/app/shared/services/admin/admin.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit{
  adminProfile:admin;
  constructor(private admin:AdminService) { }
  ngOnInit(){
    this.admin.viewAdminProfile().subscribe((data)=>{
      this.adminProfile = data;
      console.log(this.adminProfile);
    })
  }
}
