import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductDeliveryListComponent } from './product-delivery-list/product-delivery-list.component';
import { DeliveryAddressesComponent } from './delivery-addresses/delivery-addresses.component';
import { ProductDeliveriesComponent } from './product-deliveries/product-deliveries.component';
import { ProductDeliveryComponent } from './product-delivery/product-delivery.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';


const routes: Routes = [
  { path: 'product-delivery', component: ProductDeliveriesComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'product-delivery/:id', component: ProductDeliveryComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'delivery-address', component: DeliveryAddressesComponent},
  { path: 'delivery-address/:id', component: DeliveryAddressComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
