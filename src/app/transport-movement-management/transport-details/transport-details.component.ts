import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
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
  detailedTransportMovement: TransportMovement;
  // details$ = this.transportMovementService.getTransportMovementDetails(this.route.snapshot.params['id'])

  constructor(private store: Store<TransportMovementState>,
               private route: ActivatedRoute, private transportMovementService: TransportMovementService) { }

  ngOnInit(): void {    
    this.transportMovementService.getTransportMovementDetails(this.route.snapshot.params['id']).subscribe(result => {
        this.detailedTransportMovement = result;
        console.log(this.detailedTransportMovement)
    })
  }

  removePackage(transportId: number, deliveryHistoryId: number){
    this.transportMovementService.removePackageFromTransportMovement(transportId, deliveryHistoryId).subscribe(result => {
      this.detailedTransportMovement = result;
      console.log(this.detailedTransportMovement)
    })
  }

  switchOneItemUpOnRouteList(transportId: number, transportSpecificationId: number){
    this.transportMovementService.changeRouteOrderUp(transportId, transportSpecificationId).subscribe(result => {
      this.detailedTransportMovement = result;
    })
  }

  switchOneItemDownOnRouteList(transportId: number, transportSpecificationId: number){
    this.transportMovementService.changeRouteOrderDown(transportId, transportSpecificationId).subscribe(result => {
      this.detailedTransportMovement = result;
    })
  }

  generateARoute(transportId: number){
    this.transportMovementService.generateARoute(transportId).subscribe(result => {
      this.detailedTransportMovement = result;
    })
  }

  ngOnDestroy(){
  }

}
