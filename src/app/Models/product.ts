import { Category } from "./product-category";
import { StateOfAggregation } from "./productState.enum";
import { ProductType } from "./productType.enum";
import { Status } from "./status.enum";

export class Product {
    productId : number;
    name: string;
    expirationDate: Date;
    description: string;
    weight : number;
    amount: number;
    fragile : boolean;
    state: StateOfAggregation;
    reserved: Status;
    productType: ProductType;
    category: Category;
   

    constructor(
        productId?: number,
        name?: string,
        expirationDate?: Date,
        description?: string,
        weight?: number,
        amount?: number,
        fragile? : boolean,
        reserved?: Status,
        state?: StateOfAggregation,
        productType?: ProductType,
        category?: Category
      ) {
        this.productId = productId || null;
        this.name = name || '';
        this.expirationDate = expirationDate || new Date();
        this.description = description || '';
        this.weight = weight || 0;
        this.amount = amount || 0;
        this.fragile = fragile || null;
        this.reserved = Status.Available;
        this.state = state || null;
        this.productType = productType || null;
        this.category = category || new Category;
    }
}