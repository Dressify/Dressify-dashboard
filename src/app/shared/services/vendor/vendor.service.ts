import { Injectable } from '@angular/core';
import {apiEndpoints} from "../../api-endpoints";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  URL:string = apiEndpoints.baseUrl

  constructor(private http :HttpClient) { }

  createProduct(productFormData:FormData){
    return this.http.post(`${this.URL}${apiEndpoints.vendor.addProduct}`,productFormData)
  }
}
