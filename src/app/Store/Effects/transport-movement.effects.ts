import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, concatMap, exhaustMap, map, mergeMap } from "rxjs/operators";
import { addTransportMovement, addTransportMovementSuccess, deleteTransportMovement, deleteTransportMovementSuccess, getTransportMovements, getTransportMovementsSuccess, updateTransportMovement, updateTransportMovementSuccess } from "../Actions/transport-movement.action";
import { TransportMovementService } from 'src/app/Service/transport-movement.service';

@Injectable()
export class TransportMovementEffects {

  loadProduct$ = createEffect(() => 
    this.action$.pipe(
      ofType(getTransportMovements),
      exhaustMap(() => 
        this.transportMovementService.getTransportMovementList().pipe(
          map((products) => getTransportMovementsSuccess(products)),
          catchError(() => EMPTY)
      )
  )
));

  addProduct$ = createEffect(() => 
    this.action$.pipe(
      ofType(addTransportMovement),
      concatMap((newTransportMovement) => 
        this.transportMovementService.addTransportMovement(newTransportMovement).pipe(
          map((transportMovement) => addTransportMovementSuccess( transportMovement ),
          catchError(() => EMPTY)
        )
        
        )
    )
  ))

updateProduct$ = createEffect(() => 
  this.action$.pipe(
    ofType(updateTransportMovement),
    concatMap((transportMovement) => 
      this.transportMovementService.updateTransportMovement(transportMovement).pipe(
        map(() => updateTransportMovementSuccess(transportMovement)),
        catchError(() => EMPTY)
      )
  ))
);

deleteProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteTransportMovement),
      mergeMap(({ transportMovementId }) =>
        this.transportMovementService.deleteTransportMovement(transportMovementId).pipe(
          map(() => deleteTransportMovementSuccess(transportMovementId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

    constructor(private action$: Actions, private transportMovementService: TransportMovementService){}

    
}