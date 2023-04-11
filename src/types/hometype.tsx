
export interface Item {
    id: number;
    quantity: number;
    description: string;
    image: string;
    price: number;
    title: string;
    category: string;
    rating:Rate;
    filter:any;
    
  
}
interface Rate{
    rate:number;
}
export interface ProductItemData extends Item {
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    quantity:number;
    rating:Rate;
    id:number;
    filter:any;
   
    
}

interface Params{
    params:number;
    pageno:number;

}
export interface ContextData{
    params:Params;
}
export type product = ProductItemData[];
export type FilterValue = 'all' | "men's clothing" | 'jewelery' | 'electronics' | "women's clothing";

export interface CartState {
    items: Item[];
    products: ProductItemData[];
    isLoading: boolean;
    filterValue: FilterValue;
}
export interface User {
    userId: number;
    title: string;
    completed: boolean;
    slug: number;
}

export interface FooterItem {
    id: number;
    name: string;
    img: any;
    section: string;

}
export type footerdata = FooterItem[]
export type footerArray = FooterItem[]
export interface CarouselItemData {
    id: number;
    imageUrl: string;
    title: string;
}
export type carouselItem = CarouselItemData[];