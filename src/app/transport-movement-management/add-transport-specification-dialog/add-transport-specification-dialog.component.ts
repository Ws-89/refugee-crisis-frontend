import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { DeliveryAddress } from 'src/app/Models/delivery-address';
import { TransportMovementSpecification } from 'src/app/Models/transport-movement-specification';
import { DeliveryAddressListComponent } from 'src/app/product-delivery-management/delivery-address-list/delivery-address-list.component';
import { deleteDeliveryAddress, updateDeliveryAddress } from 'src/app/Store/Actions/delivery-address.action';
import { DeliveryAddressState } from 'src/app/Store/Reducers/delivery-address.reducers';
import { deliveryAddressSelector } from 'src/app/Store/Selector/delivery-address.selector';

@Component({
  selector: 'app-add-transport-specification-dialog',
  templateUrl: './add-transport-specification-dialog.component.html',
  styleUrls: ['./add-transport-specification-dialog.component.css']
})
export class AddTransportSpecificationDialogComponent implements OnInit {
  deliveryAddresses$ = this.store.pipe(select(deliveryAddressSelector))
  deliveryAddresses: DeliveryAddress[];
  done = new Subject();
  selectedIndex: number = null;
  street: string = '';
  transportMovementSpecification: TransportMovementSpecification = new TransportMovementSpecification;
  constructor(private store: Store<DeliveryAddressState>, private dialogRef: MatDialogRef<DeliveryAddressListComponent>,
    @Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog) { }
    
  ngOnInit(): void {
    this.deliveryAddresses$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.deliveryAddresses = JSON.parse(JSON.stringify(data))));
  }

  selectDeliveryAddress(deliveryAddress: DeliveryAddress){
    this.transportMovementSpecification.deliveryAddress = deliveryAddress;
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

  addSpecificationToTransport(): void {
    this.dialogRef.close(this.transportMovementSpecification);
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }

}
