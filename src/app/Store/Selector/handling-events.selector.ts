// import { createSelector } from "@ngrx/store";
// import { HandlingEvent } from "src/app/Models/handling-event";
// import { HandlingEventState } from "../Reducers/handling-event.reducers";

// export const handlingEventSelector = createSelector(
//     (state: HandlingEventState) => state.handlingEvents,
//     (handlingEvents: ReadonlyArray<HandlingEvent>) => handlingEvents
// );

// const routeParams = createSelector(
//     (state: HandlingEventState) => state.router.state,
//     (state) => state.params
//   )

// //   const selectRouter = createFeatureSelector<RouterReducerState>('router');

// //   export const {
// //     selectCurrentRoute, // select the current route
// //     selectFragment, // select the current route fragment
// //     selectQueryParams, // select the current route query params
// //     selectQueryParam, // factory function to select a query param
// //     selectRouteParams, // select the current route params
// //     selectRouteParam, // factory function to select a route param
// //     selectRouteData, // select the current route data
// //     selectUrl, // select the current url
// //   } = getSelectors(selectRouter);

  
// export const handlingEvents = createSelector(
//     handlingEventSelector,
//     // selectRouteParams,
//     routeParams,
//     (handlingEvents: ReadonlyArray<HandlingEvent>, { id }) => {
//       return handlingEvents.filter((h) => h.handlingEventId === Number(id))[0];
//     }
//   )