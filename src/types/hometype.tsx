export interface cardType {
    id: number,
    img: string,
    name: string,
    desc: string,
    quantity:any,
    price:number

   

}
export type cardArray = cardType[];

export interface User {
    id: number;
    name: string;
    email: string;
}

