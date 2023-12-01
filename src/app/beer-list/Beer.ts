import { TypeBeer } from "./type-beer";

export interface Beer {
    name: string,
    type: TypeBeer,
    price: number,
    stock: number,
    image: string,
    clearance: boolean,
    quantity: number,
}