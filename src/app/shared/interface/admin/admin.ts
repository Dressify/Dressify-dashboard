import {Sales, Vendor} from "../user/user";
import {Product} from "../product/product";

export interface admin {
    adminId: string;
    adminName: string;
    email: string;
    profilePic: string;
}

export interface AllSales {
    count: number,
    sales: Sales[]
}

export interface AllVendors {
    count: number,
    vendors: Vendor[]
}

export interface ProductsWithAvgRates{
    avgRate: number,
    product: Product
}

export interface AllProducts{
    count: number,
    productsWithAvgRates: ProductsWithAvgRates[]
}

export interface AllProductsPunch{
    count: number,
    products: Product[]
}

interface Customer {
    id: string,
    userName: string,
    email: string,
}

export interface Report {
    reportId: number,
    productId: number,
    product: Product,
    customerId: string
    customer : Customer,
    vendorId: string,
    vendor: Vendor,
    description: string,
    date: string,
    reportStatus: boolean,
    action: string|null
}

export interface AllReports {
    count: number,
    productReports: Report[]
}