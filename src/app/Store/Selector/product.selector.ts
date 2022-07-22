// import { getSelectors, RouterReducerState } from "@ngrx/router-store";
// import { createFeatureSelector, createSelector } from "@ngrx/store";
// import { Product } from "src/app/Models/product";
// import { Status } from "src/app/Models/status.enum";
// import { ProductState } from "../Reducers/product.reducers";

// export const productSelector = createSelector (
//     (state: ProductState) => state.products,
//     (products: ReadonlyArray<Product>) => products
// )

// // productSelector.release()

// export const greater = (weight: number) =>
//   createSelector(productSelector, (products) => {
//   return products.filter((product: Product) => product.weight >= weight);
// });

// export const availableProducts = (available: Status) =>
//   createSelector(productSelector, (products) => {
//   return products.filter((product: Product) => product.reserved == available);
// });

// const routeParams = createSelector(
//   (state: ProductState) => state.router.state,
//   (state) => state.params
// )

// // const selectRouter = createFeatureSelector<RouterReducerState>('router');

// // export const {
// //   selectCurrentRoute, // select the current route
// //   selectFragment, // select the current route fragment
// //   selectQueryParams, // select the current route query params
// //   selectQueryParam, // factory function to select a query param
// //   selectRouteParams, // select the current route params
// //   selectRouteParam, // factory function to select a route param
// //   selectRouteData, // select the current route data
// //   selectUrl, // select the current url
// // } = getSelectors(selectRouter);


// export const product = createSelector(
//   productSelector,
//   // selectRouteParams,
//   routeParams,
//   (products: ReadonlyArray<Product>, { id }) => {
//     return products.filter((p) => p.productId === Number(id))[0];
//   }
// )