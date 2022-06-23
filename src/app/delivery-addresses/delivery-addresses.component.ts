import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeliveryAddress } from '../Models/delivery-address';
import { addDeliveryAddress, getDeliveryAddresses } from '../Store/Actions/delivery-address.action';

@Component({
  selector: 'app-delivery-addresses',
  templateUrl: './delivery-addresses.component.html',
  styleUrls: ['./delivery-addresses.component.css']
})
export class DeliveryAddressesComponent implements OnInit {
  newDeliveryAddress: DeliveryAddress = new DeliveryAddress();
  title = 'delivery addresses';

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.getAllDeliveryAddresses();
  }


  getAllDeliveryAddresses(): void {
    this.store.dispatch(getDeliveryAddresses());
  }

  addNewDeliveryAddress(): void {
    this.store.dispatch(addDeliveryAddress(this.newDeliveryAddress));
  }
  }


