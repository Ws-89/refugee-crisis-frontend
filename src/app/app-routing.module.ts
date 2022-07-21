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
import { VehicleComponent } from './vehicles-management/vehicle/vehicle.component';
import { TransportMovementFormComponent } from './transport-movement-management/transport-movement-form/transport-movement-form.component';
import { TransportDetailsComponent } from './transport-movement-management/transport-details/transport-details.component';
import { CargoManagementFormComponent } from './cargo-management/cargo-management-form/cargo-management-form.component';
import { CargoTransportDetailsComponent } from './cargo-management/cargo-transport-details/cargo-transport-details.component';


const routes: Routes = [
  { path: '', component: TransportMovementFormComponent},
  { path: 'product-delivery', component: ProductDeliveryFormComponent},
  { path: 'products', component: ProductsFormComponent },
  { path: 'product-delivery/:id', component: ProductDeliveryComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'delivery-address', component: DeliveryAddressesComponent},
  { path: 'delivery-address/:id', component: DeliveryAddressComponent},
  { path: 'vehicles', component: VehiclesFormComponent },
  { path: 'transport-movement', component: TransportMovementFormComponent},
  { path: 'vehicles/:id', component: VehicleComponent},
  { path: 'transport-movement/:id', component: TransportDetailsComponent },
  { path : 'cargo-management', component: CargoManagementFormComponent },
  { path : 'cargo-management/:id', component: CargoTransportDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
