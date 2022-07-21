import { Customer } from "./customer";
import { DeliveryAddress } from "./delivery-address";
import { DeliveryHistory } from "./delivery-history";
import { DeliverySpecification } from "./delivery-specification";
import { Product } from "./product";
import { Status } from "./status.enum";

export class ProductDelivery {
    deliveryId: number;
    description: string;
    totalWeight: number;
    deliveryHistory: DeliveryHistory;
    deliverySpecification: DeliverySpecification;
    startingAddress: DeliveryAddress;
    products: Product[];
    status: Status;
    

    constructor(
        deliveryId?: number,
        description?: string,
        totalWeight?: number,
        deliveryHistory?: DeliveryHistory,
        deliverySpecification?: DeliverySpecification,
        startingAddress?: DeliveryAddress,
        products?: Product[],
        status?: Status
    ){
        this.deliveryId = deliveryId || null;
        this.description = description || '';
        this.totalWeight = totalWeight || 0;
        this.deliveryHistory = deliveryHistory || new DeliveryHistory();
        this.deliverySpecification = deliverySpecification || new DeliverySpecification();
        this.startingAddress = startingAddress || new DeliveryAddress();
        this.products = products || new Array<Product>();
        this.status = status || Status.Available
    }
}