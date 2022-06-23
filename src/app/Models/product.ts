import { ScrollDispatcher } from "@angular/cdk/scrolling";
import { FoodType } from "./foodType.enum";
import { HygienePurpose } from "./hygienePurpose.enum";
import { MedicalPurpose } from "./medicalPurpose.enum";
import { ProductState } from "./productState.enum";
import { ProductType } from "./productType.enum";

export class Product {
    productId : number;
    name: string;
    expirationDate: Date;
    description: string;
    weight : number;
    amount: number;
    fragile : boolean;
    state: ProductState;
    foodType: FoodType;
    productType: ProductType;
    hygienePurpose: HygienePurpose;
    medicalPurpose: MedicalPurpose;

    constructor(
        productId?: number,
        name?: string,
        expirationDate?: Date,
        description?: string,
        weight?: number,
        amount?: number,
        fragile? : boolean,
        state?: ProductState,
        foodType?: FoodType,
        productType?: ProductType,
        hygienePurpose?: HygienePurpose,
        medicalPurpose?: MedicalPurpose
      ) {
        this.productId = productId || null;
        this.name = name || '';
        this.expirationDate = expirationDate || new Date();
        this.description = description || '';
        this.weight = weight || 0;
        this.amount = amount || 0;
        this.fragile = fragile || null;
        this.state = state || null;
        this.foodType = foodType || null;
        this.productType = productType || null;
        this.hygienePurpose = hygienePurpose || null;
        this.medicalPurpose = medicalPurpose || null;
    }
}