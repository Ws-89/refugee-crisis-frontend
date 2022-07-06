import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { HandlingEvent } from 'src/app/Models/handling-event';
import { HandlingEventService } from 'src/app/Service/handling-event.service';
import { TransportMovementState } from 'src/app/Store/Reducers/transport-movement.reducers';
import { transportMovement } from 'src/app/Store/Selector/transport-movement.selector';

@Component({
  selector: 'app-transport-details',
  templateUrl: './transport-details.component.html',
  styleUrls: ['./transport-details.component.css']
})
export class TransportDetailsComponent implements OnInit {
  transportMovement$ = this.store.pipe(select(transportMovement));
  handlingEvents: HandlingEvent[];
  constructor(private store: Store<TransportMovementState>, private handlingEventService: HandlingEventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('id transportu', this.route.snapshot.params['id'])
      this.handlingEventService.getHandlingEventsByTransportId(this.route.snapshot.params['id']).subscribe(
        (result) => Object.assign(result, this.handlingEvents)
      )
      console.log
  }

}
