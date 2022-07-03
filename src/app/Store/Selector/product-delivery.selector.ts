import { getSelectors, RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductDelivery } from "src/app/Models/product-delivery";
import { Status } from "src/app/Models/status.enum";
import { ProductDeliveryState } from "../Reducers/product-delivery.reducers";

export const productDeliverySelector = createSelector(
    (state: ProductDeliveryState) => state.productDeliveries,
    (productDeliveries: ReadonlyArray<ProductDelivery>) => productDeliveries
);

const routeParams = createSelector(
    (state: ProductDeliveryState) => state.router.state,
    (state) => state.params
  )

  export const availableProductsDelivery = (available: Status) =>
  createSelector(productDeliverySelector, (deliveryList) => {
  return deliveryList.filter((delivery: ProductDelivery) => delivery.status == available);
});

//   const selectRouter = createFeatureSelector<RouterReducerState>('router');

//   export const {
//     selectCurrentRoute, // select the current route
//     selectFragment, // select the current route fragment
//     selectQueryParams, // select the current route query params
//     selectQueryParam, // factory function to select a query param
//     selectRouteParams, // select the current route params
//     selectRouteParam, // factory function to select a route param
//     selectRouteData, // select the current route data
//     selectUrl, // select the current url
//   } = getSelectors(selectRouter);

  
export const productDelivery = createSelector(
    productDeliverySelector,
    // selectRouteParams,
    routeParams,
    (productDeliveries: ReadonlyArray<ProductDelivery>, { id }) => {
      return productDeliveries.filter((p) => p.deliveryId === Number(id))[0];
    }
  )