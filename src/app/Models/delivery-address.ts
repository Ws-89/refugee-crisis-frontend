import { DeliverySpecification } from "./delivery-specification";

export class DeliveryAddress {
  deliveryAddressId: number;
  postCode: string;
  city: string;
  street: string;
  deliverySpecifications: DeliverySpecification[];

  constructor(
    deliveryAddressId?: number,
    postCode?: string,
    city?: string,
    street?: string,
    deliverySpecifications?: DeliverySpecification[]
  ) {
    this.deliveryAddressId = deliveryAddressId || 0;
    this.postCode = postCode || '';
    this.city = city || '';
    this.street = street || '';
    this.deliverySpecifications = deliverySpecifications || new Array<DeliverySpecification>();
  }
}
