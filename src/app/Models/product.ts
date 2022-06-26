import { ProductState } from "./productState.enum";
import { ProductType } from "./productType.enum";
import { Status } from "./status.enum";

export class Product {
    productId : number;
    name: string;
    expirationDate: Date;
    category: string;
    description: string;
    weight : number;
    amount: number;
    fragile : boolean;
    state: ProductState;
    reserved: Status;
    productType: ProductType;
   

    constructor(
        productId?: number,
        name?: string,
        expirationDate?: Date,
        category?: string,
        description?: string,
        weight?: number,
        amount?: number,
        fragile? : boolean,
        reserved?: Status,
        state?: ProductState,
        productType?: ProductType,
      ) {
        this.productId = productId || null;
        this.name = name || '';
        this.expirationDate = expirationDate || new Date();
        this.category = category || '';
        this.description = description || '';
        this.weight = weight || 0;
        this.amount = amount || 0;
        this.fragile = fragile || null;
        this.reserved = Status.Available;
        this.state = state || null;
        this.productType = productType || null;
    }
}