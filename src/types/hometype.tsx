export interface CardItem {
    id: number,
    img: string,
    name: string,
    desc: string,
    price: number,
}
export type CardSummaryProps = {
    item: CardItem;
    

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

