import { DeliverySpecification } from "./delivery-specification";
import { HandlingEvent } from "./handling-event";

import { StartingPointAddress } from "./starting-point-address";
import { Vehicle } from "./vehicle";

export class TransportMovement {
    transportMovementId: number;
    handlingEvents: HandlingEvent[];
    deliverySpecification: DeliverySpecification;
    startingPointAddress: StartingPointAddress;
    vehicle: Vehicle;

    constructor(
        transportMovementId?: number,
        handlingEvents?: HandlingEvent[],
        deliverySpecification?: DeliverySpecification,
        startingPointAddress?: StartingPointAddress,
        vehicle?: Vehicle
    ){
        this.transportMovementId = transportMovementId || null;
        this.handlingEvents = handlingEvents || new Array<HandlingEvent>();
        this.deliverySpecification = deliverySpecification || new DeliverySpecification;
        this.startingPointAddress = startingPointAddress || new StartingPointAddress;
        this.vehicle = vehicle || new Vehicle;
    }    

}