import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {VendorService} from "../../../../shared/services/vendor/vendor.service";
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../shared/interface/product/product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Question} from "../../../../shared/interface/user/user";



@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
  rating = 4 ;
  product: Product
  question: Question

  answerQuestionForm:FormGroup

  owlcarousel2ptions = {
    center: true,
    loop: true,
    margin: 10,
    items: 1,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  }

  constructor(public config: NgbRatingConfig, private vendor:VendorService, private route:ActivatedRoute, private fb:FormBuilder, private router:Router) {
    config.max = 5;
    config.readonly = true;

    this.answerQuestionForm = this.fb.group({
      questionId: ['', Validators.required],
      productId: ['', Validators.required],
      answer :['' ,Validators.required]
    });
  }


  ngOnInit(): void {
    this.getQuestion()
  }

  getQuestion(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const params = new HttpParams()
          .set('questionId', id)
      this.vendor.getQuestionById(params).subscribe(data =>{
        this.question = data
        this.product = data.product
        console.log(this.question)
        this.answerQuestionForm.get('questionId')?.setValue(data.questionID)
        this.answerQuestionForm.get('productId')?.setValue(data.product.productId)
      },error => {
        console.log(error)
        this.router.navigate(['./vendor'])
      })

    }
    else{
      this.router.navigate(['./vendor'])
    }
  }

  onSubmit(){
    console.log(this.answerQuestionForm)
    if(this.answerQuestionForm.valid){
      console.log(this.answerQuestionForm.value)
      this.vendor.answerQuestion(this.answerQuestionForm.value).subscribe(data => {
        console.log(data)
        this.getQuestion()
      }, error => {
        console.log(error)
      })
  }}
}
