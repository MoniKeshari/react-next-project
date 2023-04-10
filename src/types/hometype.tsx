
export interface Item {
    id: number;
    quantity: number;
    description: string;
    image: string;
    price: number;
    title: string;
    category: string;
  
}
export interface productItem extends Item {
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    quantity:number;
    id:number;
}

export type product = productItem[];



export interface CartState {
    items: Item[];
}
export interface User {
    userId: number;
    title: string;
    completed: boolean;
    slug: number;
}

export interface footerItem {
    id: number;
    name: string;
    img: string;
    section: string;

}
export type footerdata = footerItem[]
export type footerArray = footerItem[]
export interface carouselItemData {
    id: number;

    imageUrl: string;
    title: string;
}
export type carouselItem = carouselItemData[];