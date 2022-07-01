import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { Vehicle } from 'src/app/Models/vehicle';
import { deleteVehicle, updateVehicle } from 'src/app/Store/Actions/vehicle.action';
import { VehicleState } from 'src/app/Store/Reducers/vehicle.reducers';
import { vehicleSelector } from 'src/app/Store/Selector/vehicle.selector';
import { VehiclesListComponent } from 'src/app/vehicles-management/vehicles-list/vehicles-list.component';

@Component({
  selector: 'app-add-vehicle-dialog',
  templateUrl: './add-vehicle-dialog.component.html',
  styleUrls: ['./add-vehicle-dialog.component.css']
})
export class AddVehicleDialogComponent implements OnInit {
  vehicles$ = this.store.pipe(select(vehicleSelector))
  vehicles: Vehicle[];
  done = new Subject();
  selectedIndex: number = null;
  capacity: number = 0;

  constructor(private store: Store<VehicleState>, private dialogRef: MatDialogRef<VehiclesListComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) { }
    
  ngOnInit(): void {
    this.vehicles$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.vehicles = JSON.parse(JSON.stringify(data))));
  }

  selectVehicle(vehicle: Vehicle){
    this.dialogRef.close(vehicle);
  }

  enableEdit(vehicle: Vehicle, index: number): void {
    this.selectedIndex = index;
    this.capacity = vehicle.capacity;
  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  update(vehicle: Vehicle): void {
    const da = {...vehicle}
    da.capacity = this.capacity;
    this.store.dispatch(updateVehicle(da));
    this.selectedIndex = null;
  }

  delete(vehicleId: number): void {
    this.store.dispatch(deleteVehicle(vehicleId));
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }

}
