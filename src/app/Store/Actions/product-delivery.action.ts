import { createAction, props } from '@ngrx/store';
import { ProductDelivery } from 'src/app/Models/product-delivery';

export const getProductDeliveryList = createAction(
  '[Product delivery] Get product deliveries');

export const getProductDeliveryListSuccess = createAction(
  '[Product delivery] Get product deliveries success',
  (productDeliveries: ReadonlyArray<ProductDelivery>) => ({ productDeliveries })
);
export const addProductDelivery = createAction(
  '[Product delivery] Add product delivery',
  (productDelivery: ProductDelivery) =>  productDelivery
);
export const addProductDeliverySuccess = createAction(
  '[Product delivery] Add product delivery success',
  (productDelivery: ProductDelivery) => ({ productDelivery })
);

export const deleteProductDelivery = createAction(
  '[Product delivery] Delete product delivery',
  (productDeliveryId: number) => ({ productDeliveryId })
);

export const deleteProductDeliverySuccess = createAction(
  '[Product delivery] Delete product delivery success',
  (productDeliveryId: number) => ({ productDeliveryId })
);

export const updateProductDelivery = createAction(
  '[Product delivery] Update product delivery',
  (productDelivery: ProductDelivery) =>  productDelivery 
);

export const updateProductDeliverySuccess = createAction(
  '[Product delivery] Update product delivery success',
  (productDelivery: ProductDelivery) => ({ productDelivery })
);

