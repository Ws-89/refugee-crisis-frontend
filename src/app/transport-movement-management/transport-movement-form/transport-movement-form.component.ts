import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AssignPackageToTransportRequest } from 'src/app/Models/assign-package-to-transport-request';
import { DeliveryAddress } from 'src/app/Models/delivery-address';
import { DeliveryHistory } from 'src/app/Models/delivery-history';
import { ProductDelivery } from 'src/app/Models/product-delivery';
import { TransportMovement } from 'src/app/Models/transport-movement';
import { TransportMovementSpecification } from 'src/app/Models/transport-movement-specification';
import { DeliveryAddressListComponent } from 'src/app/product-delivery-management/delivery-address-list/delivery-address-list.component';
import { DeliveryAddressesComponent } from 'src/app/product-delivery-management/delivery-addresses/delivery-addresses.component';
import { TransportMovementService } from 'src/app/Service/transport-movement.service';
import { addDeliveryAddress, getDeliveryAddresses } from 'src/app/Store/Actions/delivery-address.action';
// import { addHandlingEvent, getHandlingEvents } from 'src/app/Store/Actions/handling-events.actions';
import { getProductDeliveryList } from 'src/app/Store/Actions/product-delivery.action';
import { addTransportMovement, getTransportMovements } from 'src/app/Store/Actions/transport-movement.action';
import { getVehicles } from 'src/app/Store/Actions/vehicle.action';
import { AddTransportSpecificationDialogComponent } from '../add-transport-specification-dialog/add-transport-specification-dialog.component';
import { AddVehicleDialogComponent } from '../add-vehicle-dialog/add-vehicle-dialog.component';

@Component({
  selector: 'app-transport-movement-form',
  templateUrl: './transport-movement-form.component.html',
  styleUrls: ['./transport-movement-form.component.css']
})
export class TransportMovementFormComponent implements OnInit {
  newTransportMovement: TransportMovement = new TransportMovement();
  assignPackageToTransportRequest: AssignPackageToTransportRequest = new AssignPackageToTransportRequest();
  // productDeliveryIndex: number;
  // transportMovementIndex: number;
  // finalDestination: boolean;
  

  constructor(private store: Store, public dialog: MatDialog, private transportMovementService: TransportMovementService) { }

  ngOnInit(): void {
    this.getProductDeliveryList();
    this.getAllDeliveryAddresses();
    this.getTransportMovements();
    this.getVehicleList();
  }

  selectTransportMovement(transportMovement: TransportMovement){
    this.assignPackageToTransportRequest.transportId = transportMovement.transportMovementId;
  }

  selectProductDelivery(productDelivery: ProductDelivery){
    this.assignPackageToTransportRequest.deliveryId = productDelivery.deliveryId;
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
      this.newTransportMovement = Object.assign({}, this.newTransportMovement, { deliveryAddress:  {...result}
      })
    })
  }

  addAdditionalAddressDialog(){
    let dialogRef = this.dialog.open(AddTransportSpecificationDialogComponent, {autoFocus: false,
      maxHeight: '90vh'});

    
    dialogRef.afterClosed().subscribe(result => {
      let transportMovementSpecifications = this.newTransportMovement.transportMovementSpecifications;
      this.newTransportMovement = Object.assign({}, this.newTransportMovement, { transportMovementSpecifications: 
        [...transportMovementSpecifications, {...result}]
    })
    console.log(this.newTransportMovement)
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
    this.newTransportMovement = new TransportMovement;
  }

  addNewDeliveryAddress(deliveryAddress: DeliveryAddress): void {
    this.store.dispatch(addDeliveryAddress(deliveryAddress))
  }

  addDeliveryToTransport(){
    this.transportMovementService.addPackageToTransport(this.assignPackageToTransportRequest).subscribe(res => {
      this.getProductDeliveryList(),
      this.getTransportMovements()
    }
      
    )  
  }


  
}
