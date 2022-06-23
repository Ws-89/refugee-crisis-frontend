import { ProductDelivery } from "./product-delivery";

export class Customer {
    customerId: number;
    productDeliveryList: ProductDelivery[];

    constructor(
        customerId?: number,
        productDeliveryList?: ProductDelivery[]
    ){
        this.customerId = customerId || null;
        this.productDeliveryList = productDeliveryList || null;
    }
}