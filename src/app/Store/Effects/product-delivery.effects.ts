import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, exhaustMap, map, concatMap, mergeMap } from "rxjs/operators";
import { ProductDeliveryService } from "src/app/Service/product-delivery.service";
import { getProductDeliveries, getProductDeliveriesSuccess, addProductDelivery, addProductDeliverySuccess, deleteProductDelivery, deleteProductDeliverySuccess, updateProductDeliverySuccess, updateProductDelivery } from "../Actions/product-delivery.action";

@Injectable()
export class ProductDeliveryEffects {

    loadProductDeliveries$ = createEffect(() => 
        this.action$.pipe(
        ofType(getProductDeliveries),
        exhaustMap(() => this.productDeliveryService.getProductDeliveries().pipe(
            map((productDeliveries) => getProductDeliveriesSuccess(productDeliveries)),
            catchError(() => EMPTY)
        )
    )));

    addProductDelivery$ = createEffect(() => 
        this.action$.pipe(
        ofType(addProductDelivery),
        concatMap((newProductDelivery) =>
         this.productDeliveryService.addProductDelivery(newProductDelivery).pipe(
            map((productDelivery) => addProductDeliverySuccess(productDelivery)),
            catchError(() => EMPTY)
        )
    )));

    deleteProductDelivery$ = createEffect(() => 
        this.action$.pipe(
            ofType(deleteProductDelivery),
            mergeMap(({productDeliveryId}) => 
            this.productDeliveryService.deleteProductDelivery(productDeliveryId).pipe(
                map(() => deleteProductDeliverySuccess(productDeliveryId)),
                catchError(() => EMPTY)
        )
    )));

    updateProductDelivery$ = createEffect(() => 
        this.action$.pipe(
            ofType(updateProductDelivery),
            concatMap((productDelivery) => 
                this.productDeliveryService.updateProductDelivery(productDelivery).pipe(
                map(() => updateProductDeliverySuccess(productDelivery)),
            catchError(() => EMPTY)
        )
  ))
);
    

    constructor(private action$: Actions, private productDeliveryService: ProductDeliveryService){}
}