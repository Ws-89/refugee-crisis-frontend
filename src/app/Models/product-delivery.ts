import { Customer } from "./customer";
import { DeliveryHistory } from "./delivery-history";
import { DeliverySpecification } from "./delivery-specification";
import { Product } from "./product";

export class ProductDelivery {
    deliveryId: number;
    description: string;
    capacity: number;
    totalWeight: number;
    deliveryHistory: DeliveryHistory;
    deliverySpecification: DeliverySpecification;
    products: Product[];
    customer: Customer;

    constructor(
        deliveryId?: number,
        description?: string,
        capacity?: number,
        totalWeight?: number,
        deliveryHistory?: DeliveryHistory,
        deliverySpecification?: DeliverySpecification,
        products?: Product[],
        customer?: Customer
    ){
        this.deliveryId = deliveryId || null;
        this.description = description || '';
        this.capacity = capacity || 0;
        this.totalWeight = totalWeight || 0;
        this.deliveryHistory = deliveryHistory || null;
        this.deliverySpecification = deliverySpecification || null;
        this.products = products || new Array<Product>();
        this.customer = customer || null;
    }
}