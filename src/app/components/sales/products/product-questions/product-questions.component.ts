import { Component, OnInit } from '@angular/core';
import {paginationState} from "../../../../shared/interface/pagination";
import {Question} from "../../../../shared/interface/user/user";
import {VendorService} from "../../../../shared/services/vendor/vendor.service";
import {HttpParams} from "@angular/common/http";
import {SalesService} from "../../../../shared/services/sales/sales.service";

@Component({
  selector: 'app-product-questions',
  templateUrl: './product-questions.component.html',
  styleUrls: ['./product-questions.component.scss']
})
export class ProductQuestionsComponent implements OnInit {
  paginationState: paginationState = {
    page: 1,
    pageSize: 5,
    searchTerm: ''
  };

  questions: Question[]
  total: number

  constructor(private sales: SalesService) {
  }

  ngOnInit(): void {
    this.getQuestions()
  }

  onPageChange(e:number){
    this.paginationState.page = e;
    this.getQuestions();
  }

  getQuestions(){
    const params = new HttpParams()
          .set('PageNumber', this.paginationState.page)
          .set('PageSize', this.paginationState.pageSize)

    console.log(params)
    console.log(this.paginationState)

    this.sales.getAllQuestions(params).subscribe(data => {
      console.log(data)
      this.questions = data.questions
      console.log(this.questions)
      this.total = data.count
    }, error => {
      console.log(error)
    })
  }
}
