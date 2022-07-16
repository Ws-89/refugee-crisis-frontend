import { DeliveryAddress } from "./delivery-address";
import { DeliveryHistory } from "./delivery-history";
import { TransportMovementSpecification } from "./transport-movement-specification";
import { Vehicle } from "./vehicle";

export class TransportMovement {
    transportMovementId: number;
    wayBills: DeliveryHistory[];
    transportMovementSpecifications: TransportMovementSpecification[];
    weightOfTheGoods: number;
    startingAddress: DeliveryAddress;
    deliveryAddress: DeliveryAddress;
    vehicle: Vehicle;

    constructor(
        transportMovementId?: number,
        wayBills?: DeliveryHistory[],
        transportMovementSpecifications?: TransportMovementSpecification[],
        weightOfTheGoods?: number,
        startingAddress?: DeliveryAddress,
        deliveryAddress?: DeliveryAddress,
        vehicle?: Vehicle
    ){
        this.transportMovementId = transportMovementId || null;
        this.wayBills = wayBills || new Array<DeliveryHistory>();
        this.transportMovementSpecifications = transportMovementSpecifications || new Array<TransportMovementSpecification>();
        this.weightOfTheGoods = weightOfTheGoods || 0;
        this.startingAddress = startingAddress || new DeliveryAddress;
        this.deliveryAddress = deliveryAddress || new DeliveryAddress;
        this.vehicle = vehicle || new Vehicle;
    }    

}