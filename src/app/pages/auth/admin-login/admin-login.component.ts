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
    this.userNavigation(this.auth.getUserRole())
  }
  showPassword() {
    this.show = !this.show;
  }

  onSubmit(){
    this.validate = true;
    console.log(this.loginForm.valid)
    if(this.loginForm.valid){
      this.auth.adminLogin(this.loginForm.value).subscribe(value => {
        this.userNavigation(value.role)
      },error => {
        console.log(error)
        this.error = error.error;
      })
    }
  }

  userNavigation(role:string|null){ // TODO unhandled token expire condition
    if(!role) return;

    if(role === 'SuperAdmin'){
      this.router.navigate(['/super-admin'])
      return;
    }

    if(role === 'Admin'){
      this.router.navigate(['/admin']);
    }
  }

}
