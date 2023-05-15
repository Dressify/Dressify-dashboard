import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getUserRole() === 'Vendor') {
      return true;
    }

    if(this.authService.getUserRole() === 'SuperAdmin' || this.authService.getUserRole() === 'Admin' || this.authService.getUserRole() === 'Sales'){
      this.router.navigate(['/error-404']);
      return false;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }
  
}
