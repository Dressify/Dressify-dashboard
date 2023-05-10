import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm:FormGroup;
  public validate = false;
  public show: boolean = false;
  public error?: any

  constructor(private fb : FormBuilder,private auth:AuthService,private router:Router) {
    this.loginForm = this.fb.group({
      UserName :['',Validators.required],
      password : ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }

  onSubmit(){
    this.validate = true;
    console.log(this.loginForm.valid)
    if(this.loginForm.valid){
      this.auth.adminLogin(this.loginForm.value).subscribe(value => {
        if(!value) return;

        if(value.role === 'SuperAdmin'){
          console.log('Navigating to super-admin page...');
          this.router.navigate(['/super-admin']);
          // this.router.navigateByUrl('./super-admin/dashboard');
          console.log('Navigation successful.');
          return;
        }

        if(value.role === 'Admin'){
          this.router.navigate(['/admin']);
          return;
        }
      },error => {
        console.log(error)
        this.error = error.error;
      })
    }
  }

}
