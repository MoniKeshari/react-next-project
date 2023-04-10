
export interface Item {
  id: number;
  // other properties of an item, such as name, price, etc.
  quantity: number;
}


export interface productItem extends Item {
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

export type product = productItem[];

export interface CartState {
    items: Item[];
}



export interface User {
    userId: number;
    title: string;
    completed: boolean;
    slug:number;
}

export interface footerItem {
    id: number;
    name: string;
    img: any;
    section: string;

}
export type footerdata = footerItem[]
export type footerArray = footerItem[]
export interface carouselItemData {
    id: number;

    imageUrl: string;
    title:string;
}
export type carouselItem = carouselItemData[];