import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { admin } from '../../interface/admin/admin';
import { apiEndpoints } from '../../api-endpoints';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  viewAdminProfile():Observable<admin>{
    return this.http.get<admin>(`${apiEndpoints.baseUrl}${apiEndpoints.admins.ViewAdminProfile}`);
  }
}
