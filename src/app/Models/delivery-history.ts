
import { ProductDelivery } from "./product-delivery";


export class DeliveryHistory {
    deliveryHistoryId: number;
    productDelivery: ProductDelivery;

    constructor(
        deliveryHistoryId?: number,
        productDelivery?: ProductDelivery
    ){
        this.deliveryHistoryId = deliveryHistoryId || null;
        this.productDelivery = productDelivery || null;
    }
}