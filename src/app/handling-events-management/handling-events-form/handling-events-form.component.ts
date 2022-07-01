import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDeliveryAddresses } from 'src/app/Store/Actions/delivery-address.action';
import { getProductDeliveryList } from 'src/app/Store/Actions/product-delivery.action';
import { getProducts } from 'src/app/Store/Actions/product.action';
import { getVehicles } from 'src/app/Store/Actions/vehicle.action';

@Component({
  selector: 'app-handling-events-form',
  templateUrl: './handling-events-form.component.html',
  styleUrls: ['./handling-events-form.component.css']
})
export class HandlingEventsFormComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getVehicleList();
    this.getProductDeliveryList();
    this.getAllDeliveryAddresses();
  }

  getVehicleList(): void {
    this.store.dispatch(getVehicles());
  }

  getProductDeliveryList(): void {
    this.store.dispatch(getProductDeliveryList());
  }

  getAllDeliveryAddresses(): void {
    this.store.dispatch(getDeliveryAddresses());
  }

}
