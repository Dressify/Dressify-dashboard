import { Injectable } from '@angular/core';
import {apiEndpoints} from "../../api-endpoints";
import {map, Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {getAdmins} from "../../interface/SuperAdmin/admin";

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
}
