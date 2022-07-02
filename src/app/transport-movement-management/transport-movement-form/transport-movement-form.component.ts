import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DeliveryAddress } from 'src/app/Models/delivery-address';
import { ProductDelivery } from 'src/app/Models/product-delivery';
import { TransportMovement } from 'src/app/Models/transport-movement';
import { DeliveryAddressListComponent } from 'src/app/product-delivery-management/delivery-address-list/delivery-address-list.component';
import { DeliveryAddressesComponent } from 'src/app/product-delivery-management/delivery-addresses/delivery-addresses.component';
import { addDeliveryAddress, getDeliveryAddresses } from 'src/app/Store/Actions/delivery-address.action';
import { getProductDeliveryList } from 'src/app/Store/Actions/product-delivery.action';
import { addTransportMovement, getTransportMovements } from 'src/app/Store/Actions/transport-movement.action';
import { getVehicles } from 'src/app/Store/Actions/vehicle.action';
import { VehiclesListComponent } from 'src/app/vehicles-management/vehicles-list/vehicles-list.component';
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

  constructor(private store: Store, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getVehicleList();
    this.getProductDeliveryList();
    this.getAllDeliveryAddresses();
    this.getTransportMovements();
  }

  selectTransportMovement(transportMovement: TransportMovement){
    console.log('transport movement id :', transportMovement.transportMovementId)
    this.transportMovementIndex = transportMovement.transportMovementId;
    console.log('transport index', this.transportMovementIndex)
  }

  selectProductDelivery(productDelivery: ProductDelivery){
    console.log('product delivery id :', productDelivery.deliveryId)
    this.productDeliveryIndex = productDelivery.deliveryId;
    console.log('delivery index', this.productDeliveryIndex)
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

  addNewTransportMovement(): void {
    // erasing this array before dispatching prevents program from reading nested arrays
    this.newTransportMovement.vehicle.transportMovement = [];
    this.store.dispatch(addTransportMovement(this.newTransportMovement))
  }

  addNewDeliveryAddress(deliveryAddress: DeliveryAddress): void {
    this.store.dispatch(addDeliveryAddress(deliveryAddress))
  }

}
