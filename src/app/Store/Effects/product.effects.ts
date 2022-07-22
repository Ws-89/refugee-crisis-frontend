import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { EMPTY, EmptyError } from 'rxjs';
// import { catchError, exhaustMap, concatMap, mergeMap, tap, map } from 'rxjs/operators';
// import { ProductService } from 'src/app/Service/product.service';

// import {
//     getProducts, getProductsSuccess, addProduct, addProductSuccess, updateProduct, updateProductSuccess, deleteProduct, deleteProductSuccess
//   } from '../Actions/product.action';

// @Injectable()
// export class ProductEffects {

//   loadProduct$ = createEffect(() => 
//     this.action$.pipe(
//       ofType(getProducts),
//       exhaustMap(() => 
//         this.productService.getProductList().pipe(
//           map((products) => getProductsSuccess(products)),
//           catchError(() => EMPTY)
//       )
//   )
// ));

//   addProduct$ = createEffect(() => 
//     this.action$.pipe(
//       ofType(addProduct),
//       concatMap((newProduct) => 
//         this.productService.addProduct(newProduct).pipe(
//           map((product) => addProductSuccess( product ),
//           catchError(() => EMPTY)
//         )
        
//         )
//     )
//   ))

// updateProduct$ = createEffect(() => 
//   this.action$.pipe(
//     ofType(updateProduct),
//     concatMap((product) => 
//       this.productService.updateProduct(product).pipe(
//         map(() => updateProductSuccess(product)),
//         catchError(() => EMPTY)
//       )
//   ))
// );

// deleteProduct$ = createEffect(() =>
//     this.action$.pipe(
//       ofType(deleteProduct),
//       mergeMap(({ productId }) =>
//         this.productService.deleteProduct(productId).pipe(
//           map(() => deleteProductSuccess(productId)),
//           catchError(() => EMPTY)
//         )
//       )
//     )
//   );

//     constructor(private action$: Actions, private productService: ProductService){}

    
// }