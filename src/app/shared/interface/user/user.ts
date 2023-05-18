import { Product } from "../product/product";

interface User {
    address: string,
    fName: string,
    lName: string,
    email: string,
    userName: string,
    imgUrl: string | null,
    phoneNumber: string
}

export interface Vendor extends User {
    nId:string,
    storeName:string
}

export interface Sales extends User {
    salesName:string,
    storeName:string,
    nId:string
}

export interface Question {
    questionID: number,
    question: string,
    answer: string | null,
    questionDate: string,
    productId: number,
    product: Product
}

export interface QuestionAnswer {
    questionId: number,
    productId: number,
    answer: string
}

export interface AllQuestions {
    count: number,
    questions: Question[]
}