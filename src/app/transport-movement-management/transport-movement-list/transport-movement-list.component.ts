import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';
import { TransportMovement } from 'src/app/Models/transport-movement';
import { TransportMovementState } from 'src/app/Store/Reducers/transport-movement.reducers';
import { transportMovementSelector, transportMovementStatus } from 'src/app/Store/Selector/transport-movement.selector';
import { deleteTransportMovement } from 'src/app/Store/Actions/transport-movement.action';
import { TransportStatus } from 'src/app/Models/transport-status.enum';

@Component({
  selector: 'app-transport-movement-list',
  templateUrl: './transport-movement-list.component.html',
  styleUrls: ['./transport-movement-list.component.css']
})
export class TransportMovementListComponent implements OnInit {
  transportMovements$ = this.store.pipe(select(transportMovementStatus(TransportStatus.InPreparation)))
  transportMovements: TransportMovement[];
  done = new Subject();
  selectedIndex: number = null;
  selectedTransportIndex: number = null;
  // street: string = '';

  @Output() selectTransportMovement:EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<TransportMovementState>) { }
    
  ngOnInit(): void {
    this.transportMovements$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.transportMovements = JSON.parse(JSON.stringify(data))));
  }

  selectTransport(transportMovement: TransportMovement): void{
    this.selectedTransportIndex = transportMovement.transportMovementId
    this.selectTransportMovement.emit(transportMovement);
  } 

  // enableEdit(transportMovement: TransportMovement, index: number): void {
  //   this.selectedIndex = index;
  //   this.street = deliveryAddress.street;
  // }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  // update(transportMovement: TransportMovement): void {
  //   const da = {...transportMovement}
  //   da.street = this.street;
  //   this.store.dispatch(updateDeliveryAddress(da));
  //   this.selectedIndex = null;
  // }

  delete(transportMovementId: number): void {
    this.store.dispatch(deleteTransportMovement(transportMovementId));
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }

}