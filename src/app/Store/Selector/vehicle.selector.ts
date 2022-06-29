import { createSelector } from "@ngrx/store";
import { Vehicle } from "src/app/Models/vehicle";
import { MaxiumCapacityState, VehicleState } from "../Reducers/vehicle.reducers";

export const vehicleSelector = createSelector (
    (state: VehicleState) => state.vehicles,
    (vehicles: ReadonlyArray<Vehicle>) => vehicles
)

export const maxiumumCapacitySelector = createSelector (
  (state: MaxiumCapacityState) => state.capacity,
  (capacity: ReadonlyArray<Number>) => capacity
)

// productSelector.release()

export const greater = (capacity: number) =>
  createSelector(vehicleSelector, (vehicles) => {
  return vehicles.filter((vehicle: Vehicle) => vehicle.capacity >= capacity);
});

const routeParams = createSelector(
  (state: VehicleState) => state.router.state,
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


export const vehicle = createSelector(
  vehicleSelector,
  // selectRouteParams,
  routeParams,
  (vehicles: ReadonlyArray<Vehicle>, { id }) => {
    return vehicles.filter((p) => p.vehicleId === Number(id))[0];
  }
)