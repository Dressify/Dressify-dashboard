import {Product} from "../product/product";

interface User {
}

export interface Vendor extends User{

}

export interface Sales extends User{

}

export interface Question{
    questionID: number,
    question: string,
    answer: string|null,
    questionDate: string,
    productId: number,
    product: Product
}

export interface QuestionAnswer{
    questionId: number,
    productId: number,
    answer: string
}

export interface AllQuestions{
    count: number,
    questions: Question[]
}

export interface Order{
    orderId: number,
    quantity: number,
    price: number,
    status: string,
    productName: string,
    date: string,
    product: Product,
}

export interface Orders{
    count: number,
    orders: Order[]
}

export interface PendingOrders{
    count: number,
    pendingOrders: Order[]
}

export interface PendingSalesOrders{
    count: number,
    pendingSalesOrders: Order[]
}