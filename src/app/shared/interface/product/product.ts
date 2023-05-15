export interface Product {
    ProductName: string;
    Description: string;
    Price: number;
    Quantity: number;
    Sale: number;
    Rentable: boolean;
    Color: string;
    Category: Category;
    SubCategory: SubCategory
    Type: Gender
    Photos: File[]
}

export interface ListProducts {
    count: number;
    products: Product[];
}

interface NameValuePair {
    name: string;
    value: string;
}

export interface CategoryList extends NameValuePair{
    value: Category
}

export interface SubCategoryList extends NameValuePair{
    value: SubCategory
}

export interface GenderList extends NameValuePair{
    value: Gender
}

type Category = 'shoes' | 'blazer' | 'hoodies' | 'coat' | 't-shirt' | 'jacket' | 'blouse' | 'sweatshirts' | 'skirt' | 'pants'
type SubCategory = 'sneaker' | 'boat' | 'boot' | 'jeans'
type Gender = 'man' | 'woman' | 'boy' | 'girl'

export const category:CategoryList[] = [
    { name: 'Shoes', value: 'shoes'},
    { name: 'Blazer', value: 'blazer'},
    { name: 'Hoodies', value: 'hoodies'},
    { name: 'Coat', value: 'coat'},
    { name: 'T-shirt\'', value: 't-shirt'},
    { name: 'Jacket', value: 'jacket'},
    { name: 'Blouse', value: 'blouse'},
    { name: 'Sweatshirts', value: 'sweatshirts'},
    { name: 'Skirt', value: 'skirt'},
    { name: 'Pants', value: 'pants'},
]

export const subCategory:SubCategoryList[] = [
    { name: 'Sneaker', value: 'sneaker'},
    { name: 'Boat', value: 'boat'},
    { name: 'Boot', value: 'boot'},
    { name: 'Jeans', value: 'jeans'},
]

export const gender:GenderList[] = [
    { name: 'Man', value: 'man'},
    { name: 'Woman', value: 'woman'},
    { name: 'Boy', value: 'boy'},
    { name: 'girl', value: 'girl'},
]