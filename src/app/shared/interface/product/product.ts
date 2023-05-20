export interface Product {
    productId: number;
    vendorId: string;
    productName: string;
    description: string;
    price: number;
    quantity: number;
    sale: number;
    purchases: number;
    color: string;
    category: Category;
    subCategory: SubCategory
    type: Gender
    productImages: Image[],
    isSuspended: boolean,
    suspendedUntil: string
}

export interface ProductDetails {
    averageRate: number
    product: Product
    quantity: number
}

export interface Image {
    imageExtension: string
    imageID: number
    imageUrl: string
    productId: number
    publicId: string
}

export interface ListProducts {
    count: number;
    vendorProducts: Product[];
}

export interface ListSalesProducts {
    count: number;
    salesProducts: Product[];
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