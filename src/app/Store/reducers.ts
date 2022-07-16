
import { routerReducer } from "@ngrx/router-store";
import {  ActionReducerMap} from "@ngrx/store";
import { deliveryAddressReducer } from "./Reducers/delivery-address.reducers";
import { productDeliveryReducer } from "./Reducers/product-delivery.reducers";
import { productReducer } from "./Reducers/product.reducers";
import { transportMovementReducer } from "./Reducers/transport-movement.reducers";
import { maxiumCapacityReducer, vehicleReducer } from "./Reducers/vehicle.reducers";

export const reducers: ActionReducerMap<any> = {
    productDeliveries: productDeliveryReducer,
    products: productReducer,
    deliveryAddresses: deliveryAddressReducer,
    vehicles: vehicleReducer,
    capacity: maxiumCapacityReducer,
    transportMovements: transportMovementReducer,
    router: routerReducer
}
