export class DeliveryAddress {
  deliveryAddressId: number;
  postCode: string;
  city: string;
  street: string;
  

  constructor(
    deliveryAddressId?: number,
    postCode?: string,
    city?: string,
    street?: string
  ) {
    this.deliveryAddressId = deliveryAddressId || 0;
    this.postCode = postCode || '';
    this.city = city || '';
    this.street = street || '';
  }
}
