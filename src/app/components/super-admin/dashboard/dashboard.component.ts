import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ecommerce',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  quote: string = "Behind every successful system lies a super admin, the unsung hero orchestrating order amidst the chaos, wielding power with responsibility and ensuring the seamless functioning of the digital realm."
  constructor() { }
  
  ngOnInit(): void {
  }

  

}
