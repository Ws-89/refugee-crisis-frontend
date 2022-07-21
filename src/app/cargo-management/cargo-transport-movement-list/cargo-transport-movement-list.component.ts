import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { TransportMovement } from 'src/app/Models/transport-movement';
import { TransportStatus } from 'src/app/Models/transport-status.enum';
import { TransportMovementService } from 'src/app/Service/transport-movement.service';
import { TransportMovementState } from 'src/app/Store/Reducers/transport-movement.reducers';
import { transportMovementStatus } from 'src/app/Store/Selector/transport-movement.selector';

@Component({
  selector: 'app-cargo-transport-movement-list',
  templateUrl: './cargo-transport-movement-list.component.html',
  styleUrls: ['./cargo-transport-movement-list.component.css']
})
export class CargoTransportMovementListComponent implements OnInit {
  // transportMovements$ = this.store.pipe(select(transportMovementStatus(TransportStatus.WaitingForLoad)))
  // transportMovements: TransportMovement[];
  // done = new Subject();
  // selectedIndex: number = null;
  // selectedTransportIndex: number = null;
  // street: string = '';

  // @Output() selectTransportMovement:EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<TransportMovementState>, ) { }
    
  ngOnInit(): void {
    // this.transportMovementService.getTransportMovementThatStopsAtAddressList()
    // this.transportMovements$
    //   .pipe(takeUntil(this.done))
    //   .subscribe((data) => (this.transportMovements = JSON.parse(JSON.stringify(data))));
  }

  selectTransport(transportMovement: TransportMovement): void{
    // this.selectedTransportIndex = transportMovement.transportMovementId
    // this.selectTransportMovement.emit(transportMovement);
  } 

  // enableEdit(transportMovement: TransportMovement, index: number): void {
  //   this.selectedIndex = index;
  //   this.street = deliveryAddress.street;
  // }

  // cancelEdit(): void {
  //   this.selectedIndex = null;
  // }

  // update(transportMovement: TransportMovement): void {
  //   const da = {...transportMovement}
  //   da.street = this.street;
  //   this.store.dispatch(updateDeliveryAddress(da));
  //   this.selectedIndex = null;
  // }

  ngOnDestroy(): void {
    // this.done.next();
    // this.done.complete();
  }

}