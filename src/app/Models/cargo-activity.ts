import { CargoActivityCategory } from "./cargo-activity-category.enum";
import { DeliveryAddress } from "./delivery-address";
import { DeliveryHistory } from "./delivery-history";

export class CargoActivity {
    cargoActivityId: number;
    timeStamp: Date;
    deliveryAddress: DeliveryAddress;
    transportMovementId: number;
    cargoActivityCategory: CargoActivityCategory;
    deliveryHistory: DeliveryHistory;

    constructor(
        cargoActivityId?: number,
        timeStamp?: Date,
        transportMovementId?: number,
        deliveryAddress? : DeliveryAddress,
        cargoActivityCategory?: CargoActivityCategory,
        deliveryHistory?: DeliveryHistory
    ){
        this.cargoActivityId = cargoActivityId || null;
        this.timeStamp = timeStamp || new Date();
        this.deliveryAddress = deliveryAddress || new DeliveryAddress();
        this.cargoActivityCategory = cargoActivityCategory || CargoActivityCategory.Loaded;
        this.deliveryHistory = deliveryHistory || new DeliveryHistory();
        this.transportMovementId = transportMovementId || 0;
    }
}