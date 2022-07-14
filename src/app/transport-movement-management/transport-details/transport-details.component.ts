import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HandlingEvent } from 'src/app/Models/handling-event';
import { TransportMovement } from 'src/app/Models/transport-movement';
import { HandlingEventService } from 'src/app/Service/handling-event.service';
import { getTransportMovements } from 'src/app/Store/Actions/transport-movement.action';
import { TransportMovementState } from 'src/app/Store/Reducers/transport-movement.reducers';
import { transportMovement } from 'src/app/Store/Selector/transport-movement.selector';

@Component({
  selector: 'app-transport-details',
  templateUrl: './transport-details.component.html',
  styleUrls: ['./transport-details.component.css']
})
export class TransportDetailsComponent implements OnInit {
  transportMovement$ = this.store.pipe(select(transportMovement));
  transportMovements: TransportMovement[] = [];
  done = new Subject();

  constructor(private store: Store<TransportMovementState>, private handlingEventService: HandlingEventService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }

  removeInitialization(handlingEventId: number){
    this.handlingEventService.deleteHandlingEvent(handlingEventId).subscribe(
      result => this.store.dispatch(getTransportMovements())
    )
  }

  ngOnDestroy(){
    this.done.next();
    this.done.complete();
  }

}
