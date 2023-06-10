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

type Category = 'shoes' | 'blazer' | 'hoodies' | 'coat' | 'shirt' | 't-shirt' | 'jacket' | 'blouse' | 'sweatshirts' | 'skirt' | 'pants' | 'tie'
type SubCategory = 'sneaker' | 'boot' | 'jeans' | 'oxford'
type Gender = 'men' | 'women' | 'boy' | 'girl'

export const category:CategoryList[] = [
    { name: 'Shoes', value: 'shoes'},
    { name: 'Blazer', value: 'blazer'},
    { name: 'Hoodies', value: 'hoodies'},
    { name: 'Coat', value: 'coat'},
    { name: 'Shirt', value: 'shirt'},
    { name: 'T-Shirt', value: 't-shirt'},
    { name: 'Jacket', value: 'jacket'},
    { name: 'Blouse', value: 'blouse'},
    { name: 'Sweatshirts', value: 'sweatshirts'},
    { name: 'Skirt', value: 'skirt'},
    { name: 'Pants', value: 'pants'},
    { name: 'Ties', value: 'tie'},
]

export const subCategory:SubCategoryList[] = [
    { name: 'Sneaker', value: 'sneaker'},
    { name: 'Boot', value: 'boot'},
    { name: 'Jeans', value: 'jeans'},
    { name: 'Oxford', value: 'oxford'},
]

export const pantsSubCategory:SubCategoryList[] = [
    { name: 'Jeans', value: 'jeans'},
]

export const shoesSubCategory:SubCategoryList[] = [
    { name: 'Sneaker', value: 'sneaker'},
    { name: 'Boot', value: 'boot'},
    { name: 'Oxford', value: 'oxford'},
]

export const gender:GenderList[] = [
    { name: 'Man', value: 'men'},
    { name: 'Women', value: 'women'},
    { name: 'Boy', value: 'boy'},
    { name: 'girl', value: 'girl'},
]