// import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
// import { environment } from "src/environments/environment";
// import { productReducer, ProductState } from "./Reducers/product.reducers";

import { routerReducer } from "@ngrx/router-store";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { deliveryAddressReducer } from "./Reducers/delivery-address.reducers";
import { productDeliveryReducer } from "./Reducers/product-delivery.reducers";
import { productReducer } from "./Reducers/product.reducers";

export const reducers: ActionReducerMap<any> = {
    productDeliveries: productDeliveryReducer,
    products: productReducer,
    deliveryAddresses: deliveryAddressReducer,
    router: routerReducer
}

export function log(reducer: ActionReducer<any>): ActionReducer<any>{
    return function(state, action){
      console.log('state', state);
      console.log('action', action)
      return reducer(state, action);
    }
  }
  
  export const metaReducers: MetaReducer<any>[] = [log];