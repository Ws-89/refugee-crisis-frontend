import { DeliveryAddress } from "./delivery-address";
import { DeliverySpecification } from "./delivery-specification";
import { HandlingEvent } from "./handling-event";
import { Vehicle } from "./vehicle";

export class TransportMovement {
    transportMovementId: number;
    handlingEvents: HandlingEvent[];
    deliverySpecification: DeliverySpecification;
    startingAddress: DeliveryAddress;
    vehicle: Vehicle;

    constructor(
        transportMovementId?: number,
        handlingEvents?: HandlingEvent[],
        deliverySpecification?: DeliverySpecification,
        startingAddress?: DeliveryAddress,
        vehicle?: Vehicle
    ){
        this.transportMovementId = transportMovementId || null;
        this.handlingEvents = handlingEvents || new Array<HandlingEvent>();
        this.deliverySpecification = deliverySpecification || new DeliverySpecification;
        this.startingAddress = startingAddress || new DeliveryAddress;
        this.vehicle = vehicle || new Vehicle;
    }    

}