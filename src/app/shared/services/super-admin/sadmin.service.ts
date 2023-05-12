import { Injectable } from '@angular/core';
import {apiEndpoints} from "../../api-endpoints";
import {map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SadminService {

  URL:string = apiEndpoints.baseUrl
  constructor(private http :HttpClient) { }

  createAdmin(adminFormData:any){
    return this.http.post(`${this.URL}${apiEndpoints.superAdmin.createAdmin}`,adminFormData)
  }
}
