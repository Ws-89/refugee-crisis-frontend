import { createAction, props } from '@ngrx/store';
import { ProductDelivery } from 'src/app/Models/product-delivery';

export const getProductDeliveryList = createAction(
  '[ProductDelivery] Get product deliveries');

export const getProductDeliveryListSuccess = createAction(
  '[ProductDelivery] Get product deliveries success',
  (productDeliveries: ReadonlyArray<ProductDelivery>) => ({ productDeliveries })
);
export const addProductDelivery = createAction(
  '[ProductDelivery] Add product delivery',
  (productDelivery: ProductDelivery) =>  productDelivery
);
export const addProductDeliverySuccess = createAction(
  '[ProductDelivery] Add product delivery success',
  (productDelivery: ProductDelivery) => ({ productDelivery })
);

export const deleteProductDelivery = createAction(
  '[ProductDelivery] Delete product delivery',
  (productDeliveryId: number) => ({ productDeliveryId })
);

export const deleteProductDeliverySuccess = createAction(
  '[ProductDelivery] Delete product delivery success',
  (productDeliveryId: number) => ({ productDeliveryId })
);

export const updateProductDelivery = createAction(
  '[ProductDelivery] Update product delivery',
  (productDelivery: ProductDelivery) =>  productDelivery 
);

export const updateProductDeliverySuccess = createAction(
  '[ProductDelivery] Update product delivery success',
  (productDelivery: ProductDelivery) => ({ productDelivery })
);

