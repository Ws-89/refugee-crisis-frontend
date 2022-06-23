import { createAction, props } from '@ngrx/store';
import { DeliveryAddress } from '../../Models/delivery-address';

export const getDeliveryAddresses = createAction(
  '[DeliveryAddress] Get delivery addresses');

export const getDeliveryAddressesSuccess = createAction(
  '[DeliveryAddress] Get delivery addresses success',
  (deliveryAddresses: ReadonlyArray<DeliveryAddress>) => ({ deliveryAddresses })
);
export const addDeliveryAddress = createAction(
  '[DeliveryAddress] Add delivery address',
  (deliveryAddress: DeliveryAddress) => ({ deliveryAddress })
);
export const addDeliveryAddressSuccess = createAction(
  '[DeliveryAddress] Add delivery address success',
  (deliveryAddress: DeliveryAddress) => ({ deliveryAddress })
);

export const deleteDeliveryAddress = createAction(
  '[DeliveryAddress] Delete delivery address',
  (deliveryAddressId: number) => ({ deliveryAddressId })
);

export const deleteDeliveryAddressSuccess = createAction(
  '[DeliveryAddress] Delete delivery address success',
  (deliveryAddressId: number) => ({ deliveryAddressId })
);

export const updateDeliveryAddress = createAction(
  '[DeliveryAddress] Update delivery address',
  (deliveryAddress: DeliveryAddress) => ({ deliveryAddress })
);

export const updateDeliveryAddressSuccess = createAction(
  '[DeliveryAddress] Update delivery address success',
  (deliveryAddress: DeliveryAddress) => ({ deliveryAddress })
);

