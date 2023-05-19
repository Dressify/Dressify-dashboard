import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {admin, AllSales} from '../../interface/admin/admin';
import { apiEndpoints } from '../../api-endpoints';
import { Observable } from 'rxjs';
import {getAdmins} from "../../interface/SuperAdmin/super-admin";
import {Sales} from "../../interface/user/user";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URL:string = apiEndpoints.baseUrl
  constructor(private http:HttpClient) { }
  viewAdminProfile():Observable<admin>{
    return this.http.get<admin>(`${apiEndpoints.baseUrl}${apiEndpoints.admins.ViewAdminProfile}`);
  }

  createSales(salesFormData:FormData){
    return this.http.post(`${apiEndpoints.baseUrl}${apiEndpoints.admins.createSales}`, salesFormData);
  }

  listSales(params:HttpParams): Observable<AllSales> {
    return this.http.get<AllSales>(`${this.URL}${apiEndpoints.admins.getAllSales}`, {params})
  }

  getSalesDetails(header: HttpHeaders): Observable<Sales>{
    return this.http.get<Sales>(`${this.URL}${apiEndpoints.admins.getSalesProfile}`, {headers:header})
  }

  editSales(body:any){
    return this.http.put(`${this.URL}${apiEndpoints.admins.editSalesProfile}`, body)
  }
}
