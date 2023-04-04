export interface CardItem {
    id: number,
    img: string,
    name: string,
    desc: string,
    price: number,
}
export interface CardItemData {
    id: number,
    img: string,
    name: string,
    desc: string,
    price: number,
    quantity: number;
    item:any;
    
}
export type detailsArray=  CardItemData[]
   
    

export type CardSummaryProps = {
    item: CardItem;
    key:any;
    

  };

export interface Item {
    id: number;
    // other properties of an item, such as name, price, etc.
    quantity: number;
    items: Item[];
}

export interface CartState {
    items: Item[];
}


export interface cardType {
    id: number,
    img: string,
    name: string,
    desc: string,
    price: number
}
export type cardArray = cardType[];

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface footerItem{
    id:number;
    name:string;
    img:any;
    section:string;

}
export type footerArray=footerItem[]
export interface carouselItemData{
    id:number;
 
    imageUrl:string;
}
export type carouselItem=carouselItemData[];