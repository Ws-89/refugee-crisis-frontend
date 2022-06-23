import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { DeliveryAddressService } from 'src/app/Service/delivery-address.service';
import { getDeliveryAddresses, getDeliveryAddressesSuccess, addDeliveryAddress, addDeliveryAddressSuccess, deleteDeliveryAddress, updateDeliveryAddress, deleteDeliveryAddressSuccess, updateDeliveryAddressSuccess } from '../Actions/delivery-address.action';



@Injectable()
export class DeliveryAddressEffects {
  loadDeliveryAddress$ = createEffect(() =>
    this.action$.pipe(
      ofType(getDeliveryAddresses),
      exhaustMap(() =>
        this.deliveryAddressService.getDeliveryAddresses().pipe(
          map((deliveryAdresses) => getDeliveryAddressesSuccess(deliveryAdresses)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addDeliveryAddress$ = createEffect(() =>
    this.action$.pipe(
      ofType(addDeliveryAddress),
      tap((deliveryAddress) => console.log(deliveryAddress)),
      concatMap(({ deliveryAddress }) =>
        this.deliveryAddressService.addDeliveryAddress(deliveryAddress).pipe(
          map((newDeliveryAddress) => addDeliveryAddressSuccess(newDeliveryAddress)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteDeliveryAddress$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteDeliveryAddress),
      mergeMap(({ deliveryAddressId }) =>
        this.deliveryAddressService.deleteDeliveryAddress(deliveryAddressId).pipe(
          map(() => deleteDeliveryAddressSuccess(deliveryAddressId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateDeliveryAddress$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateDeliveryAddress),
      concatMap(({ deliveryAddress }) =>
        this.deliveryAddressService.updateDeliveryAddress(deliveryAddress).pipe(
          map(() => updateDeliveryAddressSuccess(deliveryAddress)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private deliveryAddressService: DeliveryAddressService) {}
}
