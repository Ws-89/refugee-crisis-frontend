// import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
// import { environment } from "src/environments/environment";
// import { productReducer, ProductState } from "./Reducers/product.reducers";

import { routerReducer } from "@ngrx/router-store";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { ProductDelivery } from "../Models/product-delivery";

import { deliveryAddressReducer } from "./Reducers/delivery-address.reducers";
// import { handlingEventReducer } from "./Reducers/handling-event.reducers";

import { productDeliveryReducer, ProductDeliveryState } from "./Reducers/product-delivery.reducers";
import { productReducer } from "./Reducers/product.reducers";
import { transportMovementReducer, TransportMovementState } from "./Reducers/transport-movement.reducers";
import { maxiumCapacityReducer, vehicleReducer } from "./Reducers/vehicle.reducers";

export const reducers: ActionReducerMap<any> = {
    productDeliveries: productDeliveryReducer,
    products: productReducer,
    deliveryAddresses: deliveryAddressReducer,
    vehicles: vehicleReducer,
    capacity: maxiumCapacityReducer,
    transportMovements: transportMovementReducer,
    // handlingEvents: handlingEventReducer,
    router: routerReducer
}
