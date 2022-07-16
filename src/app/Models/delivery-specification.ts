import { DeliveryAddress } from "./delivery-address";

export class DeliverySpecification {
    deliverySpecificationId: number;
    arrivalTime: Date;
    departureTime: Date
    deliveryAddress: DeliveryAddress;

    constructor(
        deliverySpecificationId?: number,
        arrivalTime?: Date,
        departureTime?: Date,
        deliveryAddress?: DeliveryAddress
    ){
        this.deliverySpecificationId = deliverySpecificationId || null;
        this.arrivalTime = arrivalTime || new Date();
        this.departureTime = departureTime || new Date();
        this.deliveryAddress = deliveryAddress || new DeliveryAddress();
    }
}

