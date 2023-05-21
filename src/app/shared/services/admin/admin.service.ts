import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  admin,
  AllProducts,
  AllProductsPunch,
  AllReports,
  AllSales,
  AllVendors,
  Report
} from '../../interface/admin/admin';
import { apiEndpoints } from '../../api-endpoints';
import { Observable } from 'rxjs';
import {getAdmins} from "../../interface/SuperAdmin/super-admin";
import {Sales, Vendor} from "../../interface/user/user";
import {ProductDetails} from "../../interface/product/product";
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

  listVendors(params:HttpParams): Observable<AllVendors> {
    return this.http.get<AllVendors>(`${this.URL}${apiEndpoints.admins.getAllVendors}`, {params})
  }

  getVendorDetails(header: HttpHeaders): Observable<Vendor>{
    return this.http.get<Vendor>(`${this.URL}${apiEndpoints.admins.getVendorProfile}`, {headers:header})
  }

  listReports(params:HttpParams): Observable<AllReports> {
    return this.http.get<AllReports>(`${this.URL}${apiEndpoints.productsReports.getAllReports}`, {params})
  }

  listUncheckedReports(params:HttpParams): Observable<AllReports> {
    return this.http.get<AllReports>(`${this.URL}${apiEndpoints.productsReports.getUncheckedReports}`, {params})
  }

  getReportDetails(params: HttpParams): Observable<Report>{
    return this.http.get<Report>(`${this.URL}${apiEndpoints.productsReports.getReportById}`, {params})
  }

  checkReport(params:HttpParams){
    return this.http.put(`${this.URL}${apiEndpoints.admins.checkReport}`, '', {params})
  }

  actionReport(body:any){
    return this.http.put(`${this.URL}${apiEndpoints.admins.actionReport}`, body)
  }

  getAllProducts(params:HttpParams): Observable<AllProducts>{
    return this.http.get<AllProducts>(`${this.URL}${apiEndpoints.products.getProductsPage}`, {params})
  }

  getAllSuspendedProducts(params:HttpParams): Observable<AllProducts>{
    return this.http.get<AllProducts>(`${this.URL}${apiEndpoints.products.getSuspendedProducts}`, {params})
  }

  productsNeedToPunch(params:HttpParams){
    return this.http.get<AllProductsPunch>(`${this.URL}${apiEndpoints.productsActions.needToPunch}`, {params:params})
  }

  getProduct(params:HttpParams):Observable<ProductDetails>{
    return this.http.get<ProductDetails>(`${this.URL}${apiEndpoints.admins.getProductDetails}`, {params})
  }

  suspendProduct(body:any){
    return this.http.put(`${this.URL}${apiEndpoints.admins.suspendProduct}`, body)
  }

  unsuspendProduct(params:HttpParams){
    return this.http.put(`${this.URL}${apiEndpoints.admins.unSuspendedProduct}`, '',{params})
  }

  suspendVendor(body:any){
    return this.http.put(`${this.URL}${apiEndpoints.admins.suspendVendor}`, body)
  }

  unsuspendVendor(params:HttpParams){
    return this.http.put(`${this.URL}${apiEndpoints.admins.unSuspendedVendor}`, '',{params})
  }

}
