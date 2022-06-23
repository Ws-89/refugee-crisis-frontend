import { HandlingEvent } from "./handling-event";
import { ProductDelivery } from "./product-delivery";


export class DeliveryHistory {
    deliveryHistoryId: number;
    handlingEvents: HandlingEvent[];
    productDelivery: ProductDelivery;

    constructor(
        deliveryHistoryId: number,
        handlingEvents: HandlingEvent[],
        productDelivery: ProductDelivery
    ){
        this.deliveryHistoryId = deliveryHistoryId || null;
        this.handlingEvents = handlingEvents || new Array<HandlingEvent>();
        this.productDelivery = productDelivery || null;
    }
}