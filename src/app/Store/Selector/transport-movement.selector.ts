import { createSelector } from "@ngrx/store";
import { TransportMovement } from "src/app/Models/transport-movement";
import { TransportStatus } from "src/app/Models/transport-status.enum";
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

export const transportMovementStatus = (status: TransportStatus) =>
createSelector(transportMovementSelector, (transportMovementList) => {
return transportMovementList.filter((transportMovement: TransportMovement) => transportMovement.transportStatus == status);
});

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


export const transportMovement = createSelector(
  transportMovementSelector,
  // selectRouteParams,
  routeParams,
  (transportMovements: ReadonlyArray<TransportMovement>, { id }) => {
    return transportMovements.filter((p) => p.transportMovementId === Number(id))[0];
  }
)