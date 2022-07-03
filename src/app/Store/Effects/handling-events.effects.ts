// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { EMPTY, EmptyError } from 'rxjs';
// import { catchError, exhaustMap, concatMap, mergeMap, tap, map } from 'rxjs/operators';
// import { HandlingEventService } from 'src/app/Service/handling-event.service';
// import { ProductService } from 'src/app/Service/product.service';
// import { addHandlingEvent, addHandlingEventSuccess, deleteHandlingEvent, deleteHandlingEventSuccess, getHandlingEvents, getHandlingEventsSuccess, updateHandlingEvent, updateHandlingEventSuccess } from '../Actions/handling-events.actions'


// @Injectable()
// export class HandlingEventEffects {

//   loadHandlingEvent$ = createEffect(() => 
//     this.action$.pipe(
//       ofType(getHandlingEvents),
//       exhaustMap(({transportMovementId}) => 
//         this.handlingEventService.getHandlingEvents(transportMovementId).pipe(
//           map((handlingEvents) => getHandlingEventsSuccess(handlingEvents)),
//           catchError(() => EMPTY)
//       )
//   )
// ));

//   addHandlingEvent$ = createEffect(() => 
//   this.action$.pipe(
//     ofType(addHandlingEvent),
//     concatMap(({handlingEvent, deliveryId, transportId}) => 
//       this.handlingEventService.addHandlingEvent(handlingEvent, deliveryId, transportId).pipe(
//         map((newHandlingEvent) => addHandlingEventSuccess( newHandlingEvent )),
//         catchError(() => EMPTY)
//       ))
//   )
// )

// updateHandlingEvent$ = createEffect(() => 
//   this.action$.pipe(
//     ofType(updateHandlingEvent),
//     concatMap((handlingEvent) => 
//       this.handlingEventService.updateHandlingEvent(handlingEvent).pipe(
//         map(() => updateHandlingEventSuccess(handlingEvent)),
//         catchError(() => EMPTY)
//       )
//   ))
// );

// deleteHandlingEvent$ = createEffect(() =>
//     this.action$.pipe(
//       ofType(deleteHandlingEvent),
//       mergeMap(({ handlingEventId }) =>
//         this.handlingEventService.deleteHandlingEvent(handlingEventId).pipe(
//           map(() => deleteHandlingEventSuccess(handlingEventId)),
//           catchError(() => EMPTY)
//         )
//       )
//     )
//   );

//     constructor(private action$: Actions, private productService: ProductService, private handlingEventService: HandlingEventService){}
 
// }