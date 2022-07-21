
import { CargoActivity } from "./cargo-activity";
import { ProductDelivery } from "./product-delivery";


export class DeliveryHistory {
    deliveryHistoryId: number;
    productDelivery: ProductDelivery;
    isLoaded: Boolean;
    cargoActivityList: CargoActivity[];

    constructor(
        deliveryHistoryId?: number,
        productDelivery?: ProductDelivery,
        isLoaded?: Boolean,
        cargoActivityList?: CargoActivity[]
    ){
        this.deliveryHistoryId = deliveryHistoryId || null;
        this.productDelivery = productDelivery || null;
        this.cargoActivityList = cargoActivityList || new Array<CargoActivity>()
        this.isLoaded = isLoaded || false;
    }
}