import { RouterReducerState } from "@ngrx/router-store";
import { createReducer, on } from "@ngrx/store";
import { Vehicle } from "src/app/Models/vehicle";
import { getVehiclesSuccess, addVehicleSuccess, deleteVehicleSuccess, updateVehicleSuccess, getMaxiumCapacitySuccess } from "../Actions/vehicle.action";

export interface VehicleState{
    vehicles: ReadonlyArray<Vehicle>;
    router: RouterReducerState<any>;
}

export interface MaxiumCapacityState{
  capacity: ReadonlyArray<Number>;
}

const initialState: ReadonlyArray<Vehicle> = [];
const initialCapacity: ReadonlyArray<Number> = [];

export const vehicleReducer = createReducer (
    initialState,
    on(getVehiclesSuccess, (state, {vehicles}) => [...vehicles]),
    on(addVehicleSuccess, (state, {vehicle}) => [...state, vehicle]),
    on(deleteVehicleSuccess, (state, { vehicleId }) => 
        state.filter((vehicle) => vehicle.vehicleId !== vehicleId)
    ),
    on(updateVehicleSuccess, (state, { vehicle }) => {
        const vehicles = state.map((p) => {
          if (p.vehicleId === vehicle.vehicleId) {
            return vehicle;
          }
          return p;
        });
        return vehicles;
      })
);

export const maxiumCapacityReducer = createReducer (
  initialCapacity,
  on(getMaxiumCapacitySuccess, (state, {capacity}) => [...capacity]),

);
