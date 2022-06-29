import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Vehicle } from 'src/app/Models/vehicle';
import { deleteVehicle, updateVehicle } from 'src/app/Store/Actions/vehicle.action';
import { VehicleState } from 'src/app/Store/Reducers/vehicle.reducers';
import { vehicleSelector } from 'src/app/Store/Selector/vehicle.selector';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  done = new Subject();
  selectedIndex: number = null;
  vehicles$ = this.store.pipe(select(vehicleSelector))
  capacity = 0;
  vehicles: Vehicle[];
 
  constructor(private store: Store<VehicleState>) { }


  ngOnInit(): void {
    this.vehicles$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.vehicles = JSON.parse(JSON.stringify(data))));
    }
  
  enableEdit(vehicle: Vehicle, index: number): void {
    this.selectedIndex = index;
    this.capacity = vehicle.capacity;
  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  // update the earning from the input then dispatch update action
  update(vehicle: Vehicle): void {
    const p = { ...vehicle };
    p.capacity = this.capacity;
    // dispatch action to update
    this.store.dispatch(updateVehicle(p));
    this.selectedIndex = null;
  }

  deleteVehicle(vehicleId: number): void {
    this.store.dispatch(deleteVehicle(vehicleId));
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }
}


