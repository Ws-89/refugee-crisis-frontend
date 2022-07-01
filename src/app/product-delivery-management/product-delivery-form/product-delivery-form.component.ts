import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';

import { AddProductsDialogComponent } from '../add-products-dialog/add-products-dialog.component';
import { DeliveryAddressesComponent } from '../delivery-addresses/delivery-addresses.component';
import { DeliverySpecification } from '../../Models/delivery-specification';



import { addProductDelivery, getProductDeliveryList } from '../../Store/Actions/product-delivery.action';
import { ProductDelivery } from 'src/app/Models/product-delivery';
import { Product } from 'src/app/Models/product';
import { getMaxiumCapacity } from 'src/app/Store/Actions/vehicle.action';
import { maxiumumCapacitySelector } from 'src/app/Store/Selector/vehicle.selector';
import { MaxiumCapacityState } from 'src/app/Store/Reducers/vehicle.reducers';


@Component({
  selector: 'app-product-deliveries',
  templateUrl: './product-delivery-form.component.html',
  styleUrls: ['./product-delivery-form.component.css']
})
export class ProductDeliveryFormComponent implements OnInit {
  newProductDelivery: ProductDelivery = new ProductDelivery(); 
  newDeliverySpecification: DeliverySpecification = new DeliverySpecification();
  maximumCapacity$ = this.capacityStore.pipe(select(maxiumumCapacitySelector));

  constructor(private store: Store, private capacityStore: Store<MaxiumCapacityState>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProductDeliveries();
    this.getMaxiumCapacity();
  }

  openAddressDialog(){
    let dialogRef = this.dialog.open(DeliveryAddressesComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.newProductDelivery = Object.assign({}, this.newProductDelivery, { deliverySpecification: { 
        deliveryAddress: {...result}
      }})
    })
  }

  openStartingAddressDialog(){
    let dialogRef = this.dialog.open(DeliveryAddressesComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.newProductDelivery = Object.assign({}, this.newProductDelivery, { startingAddress:  {...result}
      })
    })
  }

  openProductDialog(){
    let dialogRef = this.dialog.open(AddProductsDialogComponent);

    dialogRef.afterClosed().subscribe((result: Product) => {
      const productsArray = this.newProductDelivery.products
      this.newProductDelivery = Object.assign({}, this.newProductDelivery, { products : [...productsArray, {...result} ]})
    })
  }

  getMaxiumCapacity(): void {
    this.store.dispatch(getMaxiumCapacity())
  }
  

  getAllProductDeliveries(): void {
    this.store.dispatch(getProductDeliveryList());
  }

  addNewProductDelivery(): void{
    this.newProductDelivery = Object.assign({}, this.newProductDelivery, { deliverySpecification: { ...this.newProductDelivery.deliverySpecification, 
      arrivalTime : this.newDeliverySpecification.arrivalTime
    }})
    this.store.dispatch(addProductDelivery(this.newProductDelivery));
    this.newProductDelivery = Object.assign({}, new ProductDelivery) 
  }

}
