import {Sales, Vendor} from "../user/user";

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