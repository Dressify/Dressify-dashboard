import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  public validate = false;
  public show: boolean = false;
  public error?: any

  constructor(private fb : FormBuilder,private auth:AuthService,private router:Router) {
    this.loginForm = this.fb.group({
      stringLogin :['',Validators.required],
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
      this.auth.login(this.loginForm.value).subscribe(value => {
        this.userNavigation(value.role)
      },error => {
        console.log(error)
        this.error = error.error;
      })
    }
  }

  userNavigation(role:string|null){ // TODO unhandled token expire condition
    if(!role) return;

    if(role === 'Vendor'){
      this.router.navigate(['/vendor'])
      return;
    }

    if(role === 'Sales'){
      this.router.navigate(['/sales']);
    }
  }

}
