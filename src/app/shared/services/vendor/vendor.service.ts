import { Injectable } from '@angular/core';
import {apiEndpoints} from "../../api-endpoints";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListProducts, Product, ProductDetails} from "../../interface/product/product";
import {AllQuestions, Order, Orders, PendingOrders, Question, QuestionAnswer} from "../../interface/user/user";


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

  getAllQuestions(params:HttpParams){
    return this.http.get<AllQuestions>(`${this.URL}${apiEndpoints.vendor.getAllQuestions}`, {params})
  }

  getQuestionById(params:HttpParams){
    return this.http.get<Question>(`${this.URL}${apiEndpoints.vendor.getQuestion}`, {params})
  }

  answerQuestion(answer:any){
    return this.http.put<QuestionAnswer>(`${this.URL}${apiEndpoints.vendor.answerQuestion}`, answer)
  }

  getOrders(params:HttpParams){
    return this.http.get<Orders>(`${this.URL}${apiEndpoints.vendor.getOrders}`, {params})
  }

  getPendingOrders(params:HttpParams){
    return this.http.get<PendingOrders>(`${this.URL}${apiEndpoints.vendor.getPendingOrders}`, {params})
  }

  getOrderDetails(params:HttpParams){
    return this.http.get<Order>(`${this.URL}${apiEndpoints.vendor.getOrderDetails}`, {params})
  }

  confirmOrder(params:HttpParams){
    return this.http.put(`${this.URL}${apiEndpoints.vendor.getQuestion}`, '', {params:params})
  }
}
