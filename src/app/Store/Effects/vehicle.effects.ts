import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError } from 'rxjs';
import { catchError, exhaustMap, concatMap, mergeMap, tap, map, switchMap } from 'rxjs/operators';
import { VehicleService } from "src/app/Service/vehicle.service";
import { deleteVehicle, updateVehicle, addVehicle, addVehicleSuccess, getVehicles, getVehiclesSuccess, updateVehicleSuccess, deleteVehicleSuccess, getMaxiumCapacity, getMaxiumCapacitySuccess } from '../Actions/vehicle.action';

@Injectable()
export class VehicleEffects {

    loadVehicles$ = createEffect(() => 
    this.action$.pipe(
      ofType(getVehicles),
      exhaustMap(() => 
        this.vehicleService.getVehiclesList().pipe(
          map((vehicles) => getVehiclesSuccess(vehicles)),
          catchError(() => EMPTY)
      )
  )
));

  addVehicle$ = createEffect(() => 
    this.action$.pipe(
      ofType(addVehicle),
      concatMap((newVehicle) => 
        this.vehicleService.addVehicle(newVehicle).pipe(
          map((vehicle) => addVehicleSuccess( vehicle ),
          catchError(() => EMPTY)
        )
        
        )
    )
  ))

updateVehicle$ = createEffect(() => 
  this.action$.pipe(
    ofType(updateVehicle),
    concatMap((vehicle) => 
      this.vehicleService.updateVehicle(vehicle).pipe(
        map(() => updateVehicleSuccess(vehicle)),
        catchError(() => EMPTY)
      )
  ))
);

deleteVehicle$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteVehicle),
      mergeMap(({ vehicleId }) =>
        this.vehicleService.deleteVehicle(vehicleId).pipe(
          map(() => deleteVehicleSuccess(vehicleId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadMaxiumCapacity$ = createEffect(() => 
    this.action$.pipe(
      ofType(getMaxiumCapacity),
      switchMap(() => 
        this.vehicleService.getMaxiumCapacity().pipe(
          map((capacity: any) => getMaxiumCapacitySuccess(capacity)),
          catchError(() => EMPTY)
      )
  )
));

    constructor(private action$: Actions, private vehicleService: VehicleService){}
}