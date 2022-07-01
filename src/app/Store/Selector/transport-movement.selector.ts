import { createSelector } from "@ngrx/store";
import { TransportMovement } from "src/app/Models/transport-movement";
import { TransportMovementState } from "../Reducers/transport-movement.reducers";

export const transportMovementSelector = createSelector (
    (state: TransportMovementState) => state.transportMovements,
    (transportMovements: ReadonlyArray<TransportMovement>) => transportMovements
)

// productSelector.release()

// export const greater = (weight: number) =>
//   createSelector(productSelector, (products) => {
//   return products.filter((product: Product) => product.weight >= weight);
// });

const routeParams = createSelector(
  (state: TransportMovementState) => state.router.state,
  (state) => state.params
)

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


export const product = createSelector(
  transportMovementSelector,
  // selectRouteParams,
  routeParams,
  (transportMovements: ReadonlyArray<TransportMovement>, { id }) => {
    return transportMovements.filter((p) => p.transportMovementId === Number(id))[0];
  }
)