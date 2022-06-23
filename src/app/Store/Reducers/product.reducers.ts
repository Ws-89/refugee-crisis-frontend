import { RouterReducerState } from "@ngrx/router-store";
import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/Models/product";
import { addProductSuccess, deleteProductSuccess, getProductsSuccess, updateProductSuccess } from "../Actions/product.action";


export interface ProductState{
    products: ReadonlyArray<Product>;
    router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<Product> = [];

export const productReducer = createReducer (
    initialState,
    on(getProductsSuccess, (state, {products}) => [...products]),
    on(addProductSuccess, (state, {product}) => [...state, product]),
    on(deleteProductSuccess, (state, { productId }) => 
        state.filter((product) => product.productId !== productId)
    ),
    on(updateProductSuccess, (state, { product }) => {
        const products = state.map((p) => {
          if (p.productId === product.productId) {
            return product;
          }
          return p;
        });
        return products;
      })
);


    
