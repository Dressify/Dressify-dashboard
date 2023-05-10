import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class SuperAdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn() && this.authService.getUserRole() === 'SuperAdmin') {
      return true;
    }

    if(this.authService.getUserRole() === 'Admin' || this.authService.getUserRole() === 'Vendor' || this.authService.getUserRole() ==='Sales'){
      this.router.navigate(['/error-404']);
      return false;
    }

    this.router.navigate(['/auth/adminLogin']);
    return false;
  }
  
}