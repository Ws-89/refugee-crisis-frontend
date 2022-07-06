import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { DeliveryAddress } from '../../Models/delivery-address';
import { DeliveryAddressState } from '../../Store/Reducers/delivery-address.reducers';
import { deliveryAddress } from '../../Store/Selector/delivery-address.selector';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css']
})
export class DeliveryAddressComponent implements OnInit {
  deliveryAddress$ = this.store.pipe(select(deliveryAddress))
  constructor(private store: Store<DeliveryAddressState>) { }

  ngOnInit(): void {
  }

}
