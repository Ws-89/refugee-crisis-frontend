import { RouterReducerState } from "@ngrx/router-store";
import { createReducer, on } from "@ngrx/store";
import { DeliveryHistory } from "src/app/Models/delivery-history";
import { ProductDelivery } from "src/app/Models/product-delivery";
import { addProductDeliverySuccess, deleteProductDeliverySuccess, getProductDeliveriesSuccess, updateProductDeliverySuccess } from "../Actions/product-delivery.action";

export interface ProductDeliveryState {
    productDeliveries: ReadonlyArray<ProductDelivery>;
    router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<ProductDelivery> = [];

export const productDeliveryReducer = createReducer(
    initialState,
    on(getProductDeliveriesSuccess, (state, {productDeliveries }) => [...productDeliveries]),
    on(addProductDeliverySuccess, (state, {productDelivery}) => [...state, productDelivery]),
    on(deleteProductDeliverySuccess, (state, { productDeliveryId }) => 
        state.filter((productDelivery) => productDelivery.deliveryId !== productDeliveryId)
    ),
    on(updateProductDeliverySuccess, (state, {productDelivery}) => {
        const productDeliveries = state.map((pd) => {
            if(pd.deliveryId === productDelivery.deliveryId){
                return productDelivery;
            }
            return pd;
            });
            return productDeliveries; 
    })
)
