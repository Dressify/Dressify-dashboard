import { Injectable } from '@angular/core';
import {apiEndpoints} from "../../api-endpoints";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {admin, getAdmins} from "../../interface/SuperAdmin/admin";

@Injectable({
  providedIn: 'root'
})
export class SadminService {

  URL:string = apiEndpoints.baseUrl
  constructor(private http :HttpClient) { }

  createAdmin(adminFormData:FormData){
    return this.http.post(`${this.URL}${apiEndpoints.superAdmin.createAdmin}`,adminFormData)
  }

  listAdmins(params:HttpParams): Observable<getAdmins> {
    return this.http.get<getAdmins>(`${this.URL}${apiEndpoints.superAdmin.getAllAdmins}`, {params})
  }

  getAdminDetails(header: HttpHeaders): Observable<admin>{
    return this.http.get<admin>(`${this.URL}${apiEndpoints.superAdmin.getAdminProfile}`, {headers:header})
  }

  modifyAdminPhoto(header:HttpHeaders, formData:FormData){
    return this.http.put(`${this.URL}${apiEndpoints.superAdmin.modifyAdminPhoto}`, formData, {headers: header})
  }

  editAdmin(body:any){
    return this.http.put(`${this.URL}${apiEndpoints.superAdmin.editAdminProfile}`, body)
  }
}
