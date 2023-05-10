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
      this.auth.login(this.loginForm.value).subscribe(value => {
        if(!value) return;

        if(value.role === 'Vendor'){
          console.log('here')
          this.router.navigate(['/vendor']);
          console.log('here')
          return;
        }

        if(value.role === 'Sales'){
          this.router.navigate(['/sales']);
          return;
        }
      },error => {
        console.log(error)
        this.error = error.error;
      })
    }
  }


}
