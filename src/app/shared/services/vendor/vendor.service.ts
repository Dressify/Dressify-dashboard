import { Injectable } from '@angular/core';
import {apiEndpoints} from "../../api-endpoints";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListProducts, Product, ProductDetails} from "../../interface/product/product";


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  URL:string = apiEndpoints.baseUrl

  constructor(private http :HttpClient) { }

  createProduct(productFormData:FormData){
    return this.http.post(`${this.URL}${apiEndpoints.vendor.addProduct}`,productFormData)
  }

  listProducts(params:HttpParams): Observable<ListProducts> {
    return this.http.get<ListProducts>(`${this.URL}${apiEndpoints.vendor.viewOwnProducts}`, {params})
  }

  getProduct(params:HttpParams):Observable<ProductDetails>{
    return this.http.get<ProductDetails>(`${this.URL}${apiEndpoints.products.getProductDetails}`, {params})
  }

  updateQuantity(params:HttpParams){
    return this.http.put<ProductDetails>(`${this.URL}${apiEndpoints.vendor.updateQuantity}`,'' , {params})
  }
}
