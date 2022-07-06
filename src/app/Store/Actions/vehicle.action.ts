import { createAction } from "@ngrx/store";
import { Vehicle } from "src/app/Models/vehicle";

export const getVehicles = createAction('[Product] Get vehicles');

export const getVehiclesSuccess = createAction(
    '[Vehicle] Get vehicles success', 
    (vehicles: ReadonlyArray<Vehicle>) => ({vehicles})
    );

export const addVehicle = createAction(
    '[Vehicle] Add vehicle', 
    (vehicle: Vehicle) => vehicle
);

export const addVehicleSuccess = createAction(
    '[Vehicle] Add vehicle success', 
    (vehicle: Vehicle) => ({ vehicle }));

export const updateVehicle = createAction(
    '[Vehicle] Update vehicle',
    (vehicle: Vehicle) => vehicle
);

export const updateVehicleSuccess = createAction(
    '[Vehicle] Update vehicle success',
    (vehicle: Vehicle) => ({vehicle})
);

export const deleteVehicle = createAction(
    '[Vehicle] Delete vehicle',
    (vehicleId: number) => ({vehicleId})
);

export const deleteVehicleSuccess = createAction(
    '[Vehicle] Delete vehicle success',
    (vehicleId: number) => ({vehicleId})
);

export const getMaxiumCapacity = createAction('[Vehicle] Get maximum capacity');

export const getMaxiumCapacitySuccess = createAction(
    '[Vehicle] Get maximum capacity success',
    (capacity: ReadonlyArray<Number>) => ({capacity})
)