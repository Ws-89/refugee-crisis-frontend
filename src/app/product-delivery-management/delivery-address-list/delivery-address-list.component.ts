import { Component, Input, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DeliveryAddress } from 'src/app/Models/delivery-address';
import { DeliveryAddressService } from '../../Service/delivery-address.service';
import { deleteDeliveryAddress, updateDeliveryAddress } from '../../Store/Actions/delivery-address.action';
import { DeliveryAddressState } from '../../Store/Reducers/delivery-address.reducers';
import { deliveryAddressSelector } from '../../Store/Selector/delivery-address.selector';
import { DeliveryAddressesComponent } from '../delivery-addresses/delivery-addresses.component';

@Component({
  selector: 'app-delivery-address-list',
  templateUrl: './delivery-address-list.component.html',
  styleUrls: ['./delivery-address-list.component.css']
})
export class DeliveryAddressListComponent implements OnInit {
  deliveryAddresses$ = this.store.pipe(select(deliveryAddressSelector))
  deliveryAddresses: DeliveryAddress[];
  done = new Subject();
  selectedIndex: number = null;
  street: string = '';

  constructor(private store: Store<DeliveryAddressState>, private dialogRef: MatDialogRef<DeliveryAddressListComponent>,
    @Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog) { }
    
  ngOnInit(): void {
    this.deliveryAddresses$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.deliveryAddresses = JSON.parse(JSON.stringify(data))));
  }

  selectDeliveryAddress(deliveryAddress: DeliveryAddress){
    this.dialogRef.close(deliveryAddress);
  }

  enableEdit(deliveryAddress: DeliveryAddress, index: number): void {
    this.selectedIndex = index;
    this.street = deliveryAddress.street;
  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  update(deliveryAddress: DeliveryAddress): void {
    const da = {...deliveryAddress}
    da.street = this.street;
    this.store.dispatch(updateDeliveryAddress(da));
    this.selectedIndex = null;
  }

  delete(deliveryId: number): void {
    this.store.dispatch(deleteDeliveryAddress(deliveryId));
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }

}
