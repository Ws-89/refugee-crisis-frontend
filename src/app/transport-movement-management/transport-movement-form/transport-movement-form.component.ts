import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DeliveryAddress } from 'src/app/Models/delivery-address';
import { HandlingEvent } from 'src/app/Models/handling-event';
import { ProductDelivery } from 'src/app/Models/product-delivery';
import { TransportMovement } from 'src/app/Models/transport-movement';
import { DeliveryAddressListComponent } from 'src/app/product-delivery-management/delivery-address-list/delivery-address-list.component';
import { DeliveryAddressesComponent } from 'src/app/product-delivery-management/delivery-addresses/delivery-addresses.component';
import { HandlingEventService } from 'src/app/Service/handling-event.service';
import { addDeliveryAddress, getDeliveryAddresses } from 'src/app/Store/Actions/delivery-address.action';
// import { addHandlingEvent, getHandlingEvents } from 'src/app/Store/Actions/handling-events.actions';
import { getProductDeliveryList } from 'src/app/Store/Actions/product-delivery.action';
import { addTransportMovement, getTransportMovements } from 'src/app/Store/Actions/transport-movement.action';
import { getVehicles } from 'src/app/Store/Actions/vehicle.action';
import { AddVehicleDialogComponent } from '../add-vehicle-dialog/add-vehicle-dialog.component';

@Component({
  selector: 'app-transport-movement-form',
  templateUrl: './transport-movement-form.component.html',
  styleUrls: ['./transport-movement-form.component.css']
})
export class TransportMovementFormComponent implements OnInit {
  newTransportMovement: TransportMovement = new TransportMovement();
  productDeliveryIndex: number;
  transportMovementIndex: number;
  newHandlingEvent: HandlingEvent = new HandlingEvent();

  constructor(private store: Store, public dialog: MatDialog, private handlingEventService: HandlingEventService) { }

  ngOnInit(): void {
    this.getVehicleList();
    this.getProductDeliveryList();
    this.getAllDeliveryAddresses();
    this.getTransportMovements();
  }

  selectTransportMovement(transportMovement: TransportMovement){
    this.transportMovementIndex = transportMovement.transportMovementId;
  }

  selectProductDelivery(productDelivery: ProductDelivery){
    this.productDeliveryIndex = productDelivery.deliveryId;
  }

  openAddAddressDialog(){
    let dialogRef = this.dialog.open(DeliveryAddressesComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.addNewDeliveryAddress(result)
    })
  }

  openStartingAddressDialog(){
    let dialogRef = this.dialog.open(DeliveryAddressListComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.newTransportMovement = Object.assign({}, this.newTransportMovement, { startingAddress:  {...result}
      })
    })
  }

  openDeliveryAddressDialog(){
    let dialogRef = this.dialog.open(DeliveryAddressListComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.newTransportMovement = Object.assign({}, this.newTransportMovement, { deliverySpecification: { 
        deliveryAddress: {...result}
      }})
    })
  }

  openAddVehicleDialog(){
    let dialogRef = this.dialog.open(AddVehicleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.newTransportMovement = Object.assign({}, this.newTransportMovement, { vehicle:  {...result}
      })
    })
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

  getTransportMovements(): void {
    this.store.dispatch(getTransportMovements());
  }

  // getHandlingEvents(transportMovementId: number): void {
  //   this.store.dispatch(getHandlingEvents(transportMovementId));
  // }

  addNewTransportMovement(): void {
    // erasing this array before dispatching prevents program from reading nested arrays
    this.newTransportMovement.vehicle.transportMovement = [];
    this.store.dispatch(addTransportMovement(this.newTransportMovement))
  }

  addNewDeliveryAddress(deliveryAddress: DeliveryAddress): void {
    this.store.dispatch(addDeliveryAddress(deliveryAddress))
  }

  addDeliveryToTransport(){
    // this.store.dispatch(addHandlingEvent(this.newHandlingEvent, this.productDeliveryIndex, this.transportMovementIndex))
    this.handlingEventService.addHandlingEvent(this.newHandlingEvent, this.productDeliveryIndex, this.transportMovementIndex).subscribe(res => {
      this.getProductDeliveryList(),
      this.getTransportMovements()
    }
      
    )


    

    
        
      
  }


  
}
