import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(private store: Store,
    private dialogRef: MatDialogRef<DeliveryAddressesComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {

    }
  ngOnInit(): void {
    this.getAllDeliveryAddresses();
  }

  selectDeliveryAddress(deliveryAddress: DeliveryAddress){
    this.dialogRef.close(deliveryAddress);
  }

  getAllDeliveryAddresses(): void {
    this.store.dispatch(getDeliveryAddresses());
  }

  addNewDeliveryAddress(): void {
    this.store.dispatch(addDeliveryAddress(this.newDeliveryAddress));
    this.dialogRef.close(this.newDeliveryAddress);
  }

  close() {
    this.dialogRef.close();
}
  }


