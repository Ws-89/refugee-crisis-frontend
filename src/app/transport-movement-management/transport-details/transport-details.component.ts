import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TransportMovement } from 'src/app/Models/transport-movement';
import { TransportMovementService } from 'src/app/Service/transport-movement.service';
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
  detailedTransportMovement: TransportMovement;

  constructor(private store: Store<TransportMovementState>,
               private route: ActivatedRoute, private transportMovementService: TransportMovementService) { }

  ngOnInit(): void {   
    this.transportMovementService.getTransportMovementDetails(this.route.snapshot.params['id']).subscribe(result => {
        this.detailedTransportMovement = result;
        console.log(this.detailedTransportMovement)
    })
  }

  ngOnDestroy(){
    this.done.next();
    this.done.complete();
  }

}
