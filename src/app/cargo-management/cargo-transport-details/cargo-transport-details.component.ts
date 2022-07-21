import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { resultMemoize, Store } from '@ngrx/store';
import { CargoActivity } from 'src/app/Models/cargo-activity';
import { CargoActivityCategory } from 'src/app/Models/cargo-activity-category.enum';
import { DeliveryAddress } from 'src/app/Models/delivery-address';
import { DeliveryHistory } from 'src/app/Models/delivery-history';
import { TransportMovement } from 'src/app/Models/transport-movement';
import { DeliveryAddressListComponent } from 'src/app/product-delivery-management/delivery-address-list/delivery-address-list.component';
import { CargoActivityManagementService } from 'src/app/Service/cargo-activity-management.service';
import { TransportMovementService } from 'src/app/Service/transport-movement.service';
import { TransportMovementState } from 'src/app/Store/Reducers/transport-movement.reducers';

@Component({
  selector: 'app-cargo-transport-details',
  templateUrl: './cargo-transport-details.component.html',
  styleUrls: ['./cargo-transport-details.component.css']
})
export class CargoTransportDetailsComponent implements OnInit {
  cargoActivity: CargoActivity = new CargoActivity;
  detailedTransportMovement: TransportMovement;
  cargoActivities = CargoActivityCategory;
  cargoActivitiesKeys: any = [];
  cargoToBeLoaded: DeliveryHistory[] = [];
  cargoToBeUnloaded: DeliveryHistory[] = [];
  remainingCargo: DeliveryHistory[] = [];
  showCargo: Boolean = false;
  cargoAddresses: DeliveryAddress[] = [];
  
  // details$ = this.transportMovementService.getTransportMovementDetails(this.route.snapshot.params['id'])

  constructor(private store: Store<TransportMovementState>,
               private route: ActivatedRoute, private dialog: MatDialog, 
               private transportMovementService: TransportMovementService, 
               private cargoActivityService: CargoActivityManagementService, private cdRef: ChangeDetectorRef) { this.cdRef.markForCheck();
                
              }

  ngOnInit(): void {   
    this.cargoActivitiesKeys = Object.keys(this.cargoActivities) 
    this.cargoActivity.transportMovementId = this.route.snapshot.params['id'];
    this.transportMovementService.getTransportMovementDetails(this.route.snapshot.params['id']).subscribe(result => {
        this.detailedTransportMovement = result;
        this.cargoAddresses = this.getAddresses(result);
        console.log(this.detailedTransportMovement)
        console.log(this.cargoAddresses)
    })
  }

  getAddresses(transportMovement: TransportMovement) {
    let result = new Array<DeliveryAddress>()
    result.push(transportMovement.deliveryAddress)
    result.push(transportMovement.startingAddress)
    transportMovement.wayBills.forEach(
      wayBill => {
        result.push(wayBill.productDelivery.startingAddress)
        result.push( wayBill.productDelivery.deliverySpecification.deliveryAddress)
      }
    )
    let addresses = new Array<DeliveryAddress>()
    result.forEach(function(address){
      var i = addresses.findIndex(x => x.deliveryAddressId == address.deliveryAddressId);
      if(i == -1){
        addresses.push(address)
      }
    })
    
    return addresses
  }

  loadAllCargo(){
    this.transportMovementService.getTransportMovementDetails(this.route.snapshot.params['id']).subscribe(result => {
      this.cargoToBeLoaded = this.findCargoToBeLoaded(result.wayBills);
    this.cargoToBeUnloaded = this.findCargoToBeUnloaded(result.wayBills);
    this.remainingCargo = this.findRemainingCargo(result.wayBills);
  })
    

    
  }

  findCargoToBeLoaded(deliveryHistory: DeliveryHistory[]): DeliveryHistory[] {
    let result = new Array<DeliveryHistory>();
    deliveryHistory.forEach(x => {
      if(
        (JSON.stringify(x.productDelivery.startingAddress) === JSON.stringify(this.cargoActivity.deliveryAddress)) 
        &&
        x.isLoaded == false
        &&
        !(x.cargoActivityList.find(
          x => { return x.cargoActivityCategory === CargoActivityCategory.Loaded  && 
           JSON.stringify(x.deliveryAddress) === JSON.stringify(this.cargoActivity.deliveryAddress)
        }))
      ){
        result.push(x)
      }
    })
    console.log('to be loaded', result)
    return result;
  }

  findCargoToBeUnloaded(deliveryHistory: DeliveryHistory[]): DeliveryHistory[] {
    let result = new Array<DeliveryHistory>();
    deliveryHistory.forEach(x => {
      if((JSON.stringify(x.productDelivery.deliverySpecification.deliveryAddress) === JSON.stringify(this.cargoActivity.deliveryAddress))
      &&
      x.isLoaded == true
      &&

      !(x.cargoActivityList.find(
        x => {return x.cargoActivityCategory == CargoActivityCategory.Unloaded 
        && 
        JSON.stringify(x.deliveryAddress) === JSON.stringify(this.cargoActivity.deliveryAddress)}))
      ){
        result.push(x)
      }
    })
    console.log('to be unloaded', result)
    this.cdRef.detectChanges();
    return result;
  }

  findRemainingCargo(deliveryHistory: DeliveryHistory[]): DeliveryHistory[] {
    let result = new Array<DeliveryHistory>();
    deliveryHistory.forEach(x => {
      if((JSON.stringify(x.productDelivery.deliverySpecification.deliveryAddress) !== JSON.stringify(this.cargoActivity.deliveryAddress))
      &&
      (JSON.stringify(x.productDelivery.startingAddress) != JSON.stringify(this.cargoActivity.deliveryAddress)
      &&
      !(x.cargoActivityList.find(
        x => {return x.transportMovementId == this.route.snapshot.params['id'] && x.cargoActivityCategory == CargoActivityCategory.Unloaded}
      ))
      )){
        result.push(x)
      }
    })
    console.log('remaining cargo', result)
    return result;
  }

  openStartingAddressDialog(){
    let dialogRef = this.dialog.open(DeliveryAddressListComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.cargoActivity.deliveryAddress = result;
    })
  }

  loadCargo(deliveryId: number){
    this.cargoActivity.cargoActivityCategory = CargoActivityCategory.Loaded;
    this.cargoActivityService.addCargoHistoryLogMessage(deliveryId, this.cargoActivity).subscribe(result => {
      this.cargoToBeLoaded = this.cargoToBeLoaded.filter(x => x.deliveryHistoryId != deliveryId)
    })
  }
 

  unloadCargo(deliveryId: number){
    this.cargoActivity.cargoActivityCategory = CargoActivityCategory.Unloaded;
    this.cargoActivityService.addCargoHistoryLogMessage(deliveryId, this.cargoActivity).subscribe(result => {
      this.cargoToBeUnloaded = this.cargoToBeUnloaded.filter(x => x.deliveryHistoryId != deliveryId)
    })
  }

}
