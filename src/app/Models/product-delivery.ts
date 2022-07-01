import { Customer } from "./customer";
import { DeliveryAddress } from "./delivery-address";
import { DeliveryHistory } from "./delivery-history";
import { DeliverySpecification } from "./delivery-specification";
import { Product } from "./product";

export class ProductDelivery {
    deliveryId: number;
    description: string;
    totalWeight: number;
    deliveryHistory: DeliveryHistory;
    deliverySpecification: DeliverySpecification;
    startingAddress: DeliveryAddress;
    products: Product[];
    

    constructor(
        deliveryId?: number,
        description?: string,
        totalWeight?: number,
        deliveryHistory?: DeliveryHistory,
        deliverySpecification?: DeliverySpecification,
        startingAddress?: DeliveryAddress,
        products?: Product[]
        
    ){
        this.deliveryId = deliveryId || null;
        this.description = description || '';
        this.totalWeight = totalWeight || 0;
        this.deliveryHistory = deliveryHistory || new DeliveryHistory();
        this.deliverySpecification = deliverySpecification || new DeliverySpecification();
        this.startingAddress = startingAddress || new DeliveryAddress();
        this.products = products || new Array<Product>();
        
    }
}