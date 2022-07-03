import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './app.material.module';;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterSerializer } from './Store/routerSerializer';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from "@angular/material/table";

import { productReducer } from './Store/Reducers/product.reducers';
import { ProductListComponent } from './products-management/product-list/product-list.component';
import { ProductEffects } from './Store/Effects/product.effects';
import { ProductComponent } from './products-management/product/product.component';
import { DeliveryAddressEffects } from './Store/Effects/delivery-address.effects';
import { deliveryAddressReducer } from './Store/Reducers/delivery-address.reducers';
import { productDeliveryReducer } from './Store/Reducers/product-delivery.reducers';
import { ProductDeliveryListComponent } from './product-delivery-management/product-delivery-list/product-delivery-list.component';
import { DeliveryAddressListComponent } from './product-delivery-management/delivery-address-list/delivery-address-list.component';
import { DeliveryAddressesComponent } from './product-delivery-management/delivery-addresses/delivery-addresses.component';
import { ProductDeliveryFormComponent } from './product-delivery-management/product-delivery-form/product-delivery-form.component';
import { ProductDeliveryEffects } from './Store/Effects/product-delivery.effects';
import { ProductDeliveryComponent } from './product-delivery-management/product-delivery/product-delivery.component';
import {  reducers } from './Store/reducers';
import { DeliveryAddressComponent } from './product-delivery-management/delivery-address/delivery-address.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProductsDialogComponent } from './products-management/add-products-dialog/add-products-dialog.component';
import { ProductToAddToDeliveryListComponent } from './product-delivery-management/product-to-add-to-delivery-list/product-to-add-to-delivery-list.component';
import { ProductsFormComponent } from './products-management/products-form/products-form.component';
import { VehiclesFormComponent } from './vehicles-management/vehicles-form/vehicles-form.component';
import { VehiclesListComponent } from './vehicles-management/vehicles-list/vehicles-list.component';
import { VehicleEffects } from './Store/Effects/vehicle.effects';
import { VehicleComponent } from './vehicles-management/vehicle/vehicle.component';
import { TransportMovementFormComponent } from './transport-movement-management/transport-movement-form/transport-movement-form.component';
import { VehiclesComponent } from './transport-movement-management/vehicles/vehicles.component';
import { ProductTransportComponent } from './transport-movement-management/product-transport/product-transport.component';
import { AddVehicleDialogComponent } from './transport-movement-management/add-vehicle-dialog/add-vehicle-dialog.component';
import { TransportMovementListComponent } from './transport-movement-management/transport-movement-list/transport-movement-list.component';
import { TransportMovementEffects } from './Store/Effects/transport-movement.effects';
import { TransportDetailsComponent } from './transport-movement-management/transport-details/transport-details.component';
// import { handlingEventSelector } from './Store/Selector/handling-events.selector';
// import { HandlingEventEffects } from './Store/Effects/handling-events.effects';



@NgModule({
  declarations: [
    AppComponent,
    ProductsFormComponent,
    ProductListComponent,
    ProductComponent,
    ProductDeliveryListComponent,
    DeliveryAddressListComponent,
    DeliveryAddressesComponent,
    ProductDeliveryFormComponent,
    DeliveryAddressComponent,
    ProductDeliveryComponent,
    AddProductsDialogComponent,
    ProductToAddToDeliveryListComponent,
    VehiclesFormComponent,
    VehiclesListComponent,
    VehicleComponent,
    TransportMovementFormComponent,
    VehiclesComponent,
    ProductTransportComponent,
    AddVehicleDialogComponent,
    TransportMovementListComponent,
    TransportDetailsComponent,
  ],
  // entryComponents: [ModalFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModules,
    HttpClientModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,
    
    StoreModule.forRoot(
      reducers, { runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      }}),
    EffectsModule.forRoot([ProductEffects, DeliveryAddressEffects, ProductDeliveryEffects, VehicleEffects, TransportMovementEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
