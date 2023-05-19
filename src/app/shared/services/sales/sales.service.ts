import { Injectable } from '@angular/core';
import {apiEndpoints} from "../../api-endpoints";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListProducts, ListSalesProducts, Product, ProductDetails} from "../../interface/product/product";
import {
  AllQuestions,
  Order,
  Orders,
  PendingOrders,
  PendingSalesOrders,
  Question,
  QuestionAnswer,
  Sales
} from "../../interface/user/user";

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  URL:string = apiEndpoints.baseUrl

  constructor(private http :HttpClient) { }
  viewSalesProfile():Observable<Sales>{
    return this.http.get<Sales>(`${apiEndpoints.baseUrl}${apiEndpoints.sales.viewSalesProfile}`);
  }
  createProduct(productFormData:FormData){
    return this.http.post(`${this.URL}${apiEndpoints.sales.addProduct}`,productFormData)
  }

  listProducts(params:HttpParams): Observable<ListSalesProducts> {
    return this.http.get<ListSalesProducts>(`${this.URL}${apiEndpoints.sales.viewOwnProducts}`, {params})
  }

  getProduct(params:HttpParams):Observable<ProductDetails>{
    return this.http.get<ProductDetails>(`${this.URL}${apiEndpoints.products.getProductDetails}`, {params})
  }

  updateQuantity(params:HttpParams){
    return this.http.put<ProductDetails>(`${this.URL}${apiEndpoints.sales.updateQuantity}`,'' , {params})
  }

  getAllQuestions(params:HttpParams){
    return this.http.get<AllQuestions>(`${this.URL}${apiEndpoints.sales.getAllQuestions}`, {params})
  }

  getQuestionById(params:HttpParams){
    return this.http.get<Question>(`${this.URL}${apiEndpoints.sales.getQuestion}`, {params})
  }

  answerQuestion(answer:any){
    return this.http.put<QuestionAnswer>(`${this.URL}${apiEndpoints.sales.answerQuestion}`, answer)
  }

  getOrders(params:HttpParams){
    return this.http.get<Orders>(`${this.URL}${apiEndpoints.sales.getOrders}`, {params})
  }

  getPendingOrders(params:HttpParams){
    return this.http.get<PendingSalesOrders>(`${this.URL}${apiEndpoints.sales.getPendingOrders}`, {params})
  }

  getOrderDetails(params:HttpParams){
    return this.http.get<Order>(`${this.URL}${apiEndpoints.sales.getOrderDetails}`, {params})
  }

  confirmOrder(params:HttpParams){
    return this.http.put(`${this.URL}${apiEndpoints.sales.confirmPendingOrders}`, '', {params:params})
  }
}
