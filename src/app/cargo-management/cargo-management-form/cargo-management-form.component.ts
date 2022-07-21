import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DeliveryAddress } from 'src/app/Models/delivery-address';
import { TransportMovement } from 'src/app/Models/transport-movement';
import { DeliveryAddressListComponent } from 'src/app/product-delivery-management/delivery-address-list/delivery-address-list.component';
import { TransportMovementService } from 'src/app/Service/transport-movement.service';
import { getDeliveryAddresses } from 'src/app/Store/Actions/delivery-address.action';
import { getTransportMovements } from 'src/app/Store/Actions/transport-movement.action';

@Component({
  selector: 'app-cargo-management-form',
  templateUrl: './cargo-management-form.component.html',
  styleUrls: ['./cargo-management-form.component.css']
})
export class CargoManagementFormComponent implements OnInit {
  transportMovementList: TransportMovement[];

  constructor(private store: Store, private dialog: MatDialog, private transportMovementService: TransportMovementService) { }

  ngOnInit(): void {
    // this.getTransportMovements();
    this.getAllDeliveryAddresses();

  }


  // getTransportMovements(): void {
  //   this.store.dispatch(getTransportMovements());
  // }

  getAllDeliveryAddresses(): void {
    this.store.dispatch(getDeliveryAddresses());
  }

  findAllTransportThatStopsAtAddress(){
    
    let dialogRef = this.dialog.open(DeliveryAddressListComponent);
    
    dialogRef.afterClosed().subscribe((result: DeliveryAddress) => {

      this.transportMovementService.getTransportMovementThatStopsAtAddressList(result.deliveryAddressId).subscribe(result => {
        this.transportMovementList = result
        console.log(this.transportMovementList)
      }
          
      )
  })
   
  }

  

}
