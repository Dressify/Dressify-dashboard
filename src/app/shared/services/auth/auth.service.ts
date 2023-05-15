import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiEndpoints} from "../../api-endpoints";
import {BehaviorSubject, delay, delayWhen, map, Observable, Subject, timer} from "rxjs";
import {user} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL:string = apiEndpoints.baseUrl
  user?:any

  public readonly _role = new BehaviorSubject<any>(null);
  public readonly role = this._role.asObservable();

  constructor(private http :HttpClient) { }

  login(credentials:any){
    return this.http.post(`${this.URL}${apiEndpoints.auth.login}`,credentials).pipe(
        map((res:any) => {
          console.log(res);
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('role', res.role);
          this._role.next(res.role)
          this.user = res;
          return res;
        })
    )
  }
  adminLogin(credentials:any){
    return this.http.post(`${this.URL}${apiEndpoints.auth.adminLogin}`,credentials).pipe(
        map((res:any) => {
            console.log(res);
            sessionStorage.setItem('token', res.token);
            sessionStorage.setItem('role', res.role);
            this._role.next(res.role)
            this.user = res;
            return res;
        })
    )
  }

  logOut(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    this.user = null;
  }

  getUser(){
    return sessionStorage.getItem('token');
  }
  getUserRole(){
    return sessionStorage.getItem('role');
  }

  public isLoggedIn(): boolean {
      return !this.user;
  }

}
