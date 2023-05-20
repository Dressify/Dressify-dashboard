import { Product } from "../product/product";

interface User {
    address: string,
    fName: string,
    lName: string,
    email: string,
    userName: string,
    imgUrl: string | null,
    profilePic: string | null
    phoneNumber: string
}

export interface Vendor extends User {
    vendorId:string,
    salesId:string,
    nId:string,
    storeName:string,
    salesName:string
}

export interface Sales extends User {
    salesId:string,
    phone:string,
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