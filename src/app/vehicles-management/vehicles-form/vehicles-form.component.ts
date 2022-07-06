import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Vehicle } from 'src/app/Models/vehicle';
import { VehicleCategory } from 'src/app/Models/vehicleCategory.enum';

import { addVehicle, getVehicles } from '../../Store/Actions/vehicle.action';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})
export class VehiclesFormComponent implements OnInit {
  vehicleCategory =  VehicleCategory;
  vehicleCategoryKeys: any = [];

  newVehicle = new Vehicle();
  vehicles: Vehicle[] = [];


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.vehicleCategoryKeys = Object.keys(this.vehicleCategory);
    this.getVehiclesList()
  }

  getVehiclesList(): void {
    this.store.dispatch(getVehicles());
  }

  addNewVehicle(): void {
    this.store.dispatch(addVehicle(this.newVehicle));
  }

}
