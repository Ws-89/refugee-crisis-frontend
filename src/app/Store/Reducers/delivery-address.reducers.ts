import { RouterState } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { DeliveryAddress } from 'src/app/Models/delivery-address';
import {
  getDeliveryAddresses,
  addDeliveryAddress,
  getDeliveryAddressesSuccess,
  addDeliveryAddressSuccess,
  deleteDeliveryAddressSuccess,
  updateDeliveryAddressSuccess
} from '../Actions/delivery-address.action';

export interface DeliveryAddressState {
  deliveryAddresses: ReadonlyArray<DeliveryAddress>;
  router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<DeliveryAddress> = [];

export const deliveryAddressReducer = createReducer(
  initialState,
  on(getDeliveryAddressesSuccess, (state, { deliveryAddresses }) => [...deliveryAddresses]),
  on(addDeliveryAddressSuccess, (state, { deliveryAddress }) => [...state, deliveryAddress]),
  on(deleteDeliveryAddressSuccess, (state, { deliveryAddressId }) =>
    state.filter((deliveryAddress) => deliveryAddress.deliveryAddressId !== deliveryAddressId)
  ),
  on(updateDeliveryAddressSuccess, (state, { deliveryAddress }) => {
    const deliveryAddresses = state.map((da) => {
      if (da.deliveryAddressId === deliveryAddress.deliveryAddressId) {
        return deliveryAddress;
      }
      return da;
    });
    return deliveryAddresses;
  })
);

