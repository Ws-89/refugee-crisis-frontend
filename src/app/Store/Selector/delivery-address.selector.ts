import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeliveryAddress } from 'src/app/Models/delivery-address';
import { DeliveryAddressState,  } from '../Reducers/delivery-address.reducers';

export const deliveryAddressSelector = createSelector(
  (state: DeliveryAddressState) => state.deliveryAddresses,
  (deliveryAdresses: ReadonlyArray<DeliveryAddress>) => deliveryAdresses
);

export const greater = (weight: number) =>
  createSelector(deliveryAddressSelector, (deliveryAddresses) => {
  return deliveryAddresses.filter((deliveryAddress: DeliveryAddress) => deliveryAddress.deliveryAddressId >= 0);
});

const routeParams = createSelector(
  (state: DeliveryAddressState) => state.router.state,
  (state) => state.params
);

// const selectRouter = createFeatureSelector<RouterReducerState>('router');

// export const {
//   selectCurrentRoute, // select the current route
//   selectFragment, // select the current route fragment
//   selectQueryParams, // select the current route query params
//   selectQueryParam, // factory function to select a query param
//   selectRouteParams, // select the current route params
//   selectRouteParam, // factory function to select a route param
//   selectRouteData, // select the current route data
//   selectUrl, // select the current url
// } = getSelectors(selectRouter);

export const deliveryAddress = createSelector(
  deliveryAddressSelector,
  routeParams,
  // selectRouteParams,
  (deliveryAdresses: ReadonlyArray<DeliveryAddress>, { id }) => {
    return deliveryAdresses.filter((da) => da.deliveryAddressId === Number(id))[0];
  }
);
