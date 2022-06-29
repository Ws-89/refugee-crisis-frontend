import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products-management/product/product.component';
import { ProductDeliveryListComponent } from './product-delivery-management/product-delivery-list/product-delivery-list.component';
import { DeliveryAddressesComponent } from './product-delivery-management/delivery-addresses/delivery-addresses.component';
import { ProductDeliveryFormComponent } from './product-delivery-management/product-delivery-form/product-delivery-form.component';
import { ProductDeliveryComponent } from './product-delivery-management/product-delivery/product-delivery.component';
import { DeliveryAddressComponent } from './product-delivery-management/delivery-address/delivery-address.component';
import { ProductsFormComponent } from './products-management/products-form/products-form.component';
import { VehiclesFormComponent } from './vehicles-management/vehicles-form/vehicles-form.component';
import { HandlingEventsFormComponent } from './handling-events-management/handling-events-form/handling-events-form.component';


const routes: Routes = [
  { path: 'product-delivery', component: ProductDeliveryFormComponent},
  { path: 'products', component: ProductsFormComponent },
  { path: 'product-delivery/:id', component: ProductDeliveryComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'delivery-address', component: DeliveryAddressesComponent},
  { path: 'delivery-address/:id', component: DeliveryAddressComponent},
  { path: 'vehicles', component: VehiclesFormComponent },
  { path: 'handling-events', component: HandlingEventsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
