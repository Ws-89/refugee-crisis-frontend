import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { ProductsComponent } from './products/products.component';
import { RouterSerializer } from './Store/routerSerializer';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { productReducer } from './Store/Reducers/product.reducers';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEffects } from './Store/Effects/product.effects';
import { ProductComponent } from './product/product.component';
import { DeliveryAddressEffects } from './Store/Effects/delivery-address.effects';
import { deliveryAddressReducer } from './Store/Reducers/delivery-address.reducers';
import { productDeliveryReducer } from './Store/Reducers/product-delivery.reducers';
import { ProductDeliveryListComponent } from './product-delivery-list/product-delivery-list.component';
import { DeliveryAddressListComponent } from './delivery-address-list/delivery-address-list.component';
import { DeliveryAddressesComponent } from './delivery-addresses/delivery-addresses.component';
import { ProductDeliveriesComponent } from './product-deliveries/product-deliveries.component';
import { ProductDeliveryEffects } from './Store/Effects/product-delivery.effects';
import { ProductDeliveryComponent } from './product-delivery/product-delivery.component';
import { reducers, metaReducers } from './Store/reducers';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProductsDialogComponent } from './add-products-dialog/add-products-dialog.component';
import { ProductListDialogComponent } from './product-list-dialog/product-list-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    ProductDeliveryListComponent,
    DeliveryAddressListComponent,
    DeliveryAddressesComponent,
    ProductDeliveriesComponent,
    DeliveryAddressComponent,
    ProductDeliveryComponent,
    AddProductsDialogComponent,
    ProductListDialogComponent
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
    
    StoreModule.forRoot(
      reducers, { runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      }, metaReducers }),
    EffectsModule.forRoot([ProductEffects, DeliveryAddressEffects, ProductDeliveryEffects]),
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
