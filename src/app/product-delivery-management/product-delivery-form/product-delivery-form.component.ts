import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { DeliveryAddressesComponent } from '../delivery-addresses/delivery-addresses.component';
import { DeliverySpecification } from '../../Models/delivery-specification';
import { addProductDelivery, getProductDeliveryList } from '../../Store/Actions/product-delivery.action';
import { ProductDelivery } from 'src/app/Models/product-delivery';
import { Product } from 'src/app/Models/product';
import { getMaxiumCapacity } from 'src/app/Store/Actions/vehicle.action';
import { maxiumumCapacitySelector } from 'src/app/Store/Selector/vehicle.selector';
import { MaxiumCapacityState } from 'src/app/Store/Reducers/vehicle.reducers';
import { addDeliveryAddress, getDeliveryAddresses } from 'src/app/Store/Actions/delivery-address.action';
import { DeliveryAddressListComponent } from '../delivery-address-list/delivery-address-list.component';
import { DeliveryAddress } from 'src/app/Models/delivery-address';
import { getProducts } from 'src/app/Store/Actions/product.action';
import { ProductDeliveryService } from 'src/app/Service/product-delivery.service';


@Component({
  selector: 'app-product-deliveries',
  templateUrl: './product-delivery-form.component.html',
  styleUrls: ['./product-delivery-form.component.css']
})
export class ProductDeliveryFormComponent implements OnInit {
  newProductDelivery: ProductDelivery = new ProductDelivery(); 
  newDeliverySpecification: DeliverySpecification = new DeliverySpecification();
  maximumCapacity$ = this.capacityStore.pipe(select(maxiumumCapacitySelector));
  productDeliveryIndex: number = 0;
  productIndex: number = 0;

  constructor(private store: Store, private capacityStore: Store<MaxiumCapacityState>, private dialog: MatDialog, private productDeliveryService: ProductDeliveryService) { }

  ngOnInit(): void {
    this.getAllProductDeliveries();
    this.getMaxiumCapacity();
    this.getAllProducts();
    this.getAllDeliveryAddresses();
  }

  selectProduct(product: Product){
    this.productIndex = product.productId;
  }

  selectProductDelivery(productDelivery: ProductDelivery){
    this.productDeliveryIndex = productDelivery.deliveryId;
  }

  openAddAddressDialog(){
    let dialogRef = this.dialog.open(DeliveryAddressesComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.addNewDeliveryAddress(result)
    })
  }

  openDeliveryAddressDialog(){
    let dialogRef = this.dialog.open(DeliveryAddressListComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.newProductDelivery = Object.assign({}, this.newProductDelivery, { deliverySpecification: { 
        deliveryAddress: {...result}
      }})
    })
  }

  openStartingAddressDialog(){
    let dialogRef = this.dialog.open(DeliveryAddressListComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.newProductDelivery = Object.assign({}, this.newProductDelivery, { startingAddress:  {...result}
      })
    })
  }

  getMaxiumCapacity(): void {
    this.store.dispatch(getMaxiumCapacity())
  }

  getAllProducts(): void {
    this.store.dispatch(getProducts())
  }
  

  getAllProductDeliveries(): void {
    this.store.dispatch(getProductDeliveryList());
  }

  getAllDeliveryAddresses(): void {
    this.store.dispatch(getDeliveryAddresses());
  }

  addNewProductDelivery(): void{
    this.newProductDelivery = Object.assign({}, this.newProductDelivery, { deliverySpecification: { ...this.newProductDelivery.deliverySpecification, 
      arrivalTime : this.newDeliverySpecification.arrivalTime
    }})
    this.store.dispatch(addProductDelivery(this.newProductDelivery));
    this.newProductDelivery = Object.assign({}, new ProductDelivery) 
  }

  addNewDeliveryAddress(deliveryAddress: DeliveryAddress): void {
    this.store.dispatch(addDeliveryAddress(deliveryAddress))
  }

  assignProductToPackage(): void{ 
    this.productDeliveryService.assignProductToPackage(this.productDeliveryIndex, this.productIndex).subscribe(
      res => {
        this.getAllProductDeliveries();
        this.getAllProducts();
      }
    )
  }


}
