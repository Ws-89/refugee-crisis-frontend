import { DeliveryAddress } from "./delivery-address";
import { TransportMovement } from "./transport-movement";

export class TransportMovementSpecification {
    transportMovementSpecificationId: number;
    transportMovement: TransportMovement;
    arrivalTime: Date;
    departureTime: Date;
    deliveryAddress: DeliveryAddress;

    constructor(
        transportMovementSpecificationId?: number,
        arrivalTime?: Date,
        departureTime?: Date,
        transportMovement?: TransportMovement,
        deliveryAddress?: DeliveryAddress
    ){
        this.transportMovementSpecificationId = transportMovementSpecificationId || null;
        this.arrivalTime = arrivalTime || new Date();
        this.departureTime = departureTime || new Date();
        this.deliveryAddress = deliveryAddress || new DeliveryAddress();
        this.transportMovement = transportMovement || null;
    }
}