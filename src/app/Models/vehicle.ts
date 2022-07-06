import { TransportMovement } from "./transport-movement";
import { VehicleCategory } from "./vehicleCategory.enum";

export class Vehicle {
    vehicleId: number;
    brand: string;
    model: string;
    engine: string;
    capacity: number;
    vehicleCategory: VehicleCategory;
    licensePlate: string;
    transportMovement: TransportMovement[];

    constructor(
        vehicleId? :number,
        brand?: string,
        model?: string,
        engine?: string,
        capacity?: number,
        vehicleCategory?: VehicleCategory,
        licensePlate?: string,
        transportMovement?: TransportMovement[]
    ){
        this.vehicleId = vehicleId || null;
        this.brand = brand || '';
        this.model = model || '';
        this.engine = engine || '';
        this.capacity = capacity || 0;
        this.vehicleCategory = vehicleCategory || null;
        this.licensePlate = licensePlate || '';
        this.transportMovement = transportMovement || new Array<TransportMovement>()
    }
}