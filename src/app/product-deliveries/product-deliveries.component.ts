import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddProductsDialogComponent } from '../add-products-dialog/add-products-dialog.component';
import { DeliveryAddressesComponent } from '../delivery-addresses/delivery-addresses.component';
import { DeliverySpecification } from '../Models/delivery-specification';
import { Product } from '../Models/product';
import { ProductDelivery } from '../Models/product-delivery';
import { ProductsComponent } from '../products/products.component';
import { addProductDelivery, getProductDeliveries } from '../Store/Actions/product-delivery.action';
import { deliveryAddress } from '../Store/Selector/delivery-address.selector';
import { product } from '../Store/Selector/product.selector';

@Component({
  selector: 'app-product-deliveries',
  templateUrl: './product-deliveries.component.html',
  styleUrls: ['./product-deliveries.component.css']
})
export class ProductDeliveriesComponent implements OnInit {
  newProductDelivery: ProductDelivery = new ProductDelivery(); 
  newDeliverySpecification: DeliverySpecification = new DeliverySpecification();

  constructor(private store: Store, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProductDeliveries();
  }

  openAddressDialog(){
    let dialogRef = this.dialog.open(DeliveryAddressesComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.newProductDelivery = Object.assign({}, this.newProductDelivery, { deliverySpecification: { 
        deliveryAddress: {...result}
      }})
    })
  }

  openProductDialog(){
    let dialogRef = this.dialog.open(AddProductsDialogComponent);

    dialogRef.afterClosed().subscribe((result: Product) => {
      const productsArray = this.newProductDelivery.products
      this.newProductDelivery = Object.assign({}, this.newProductDelivery, { products : [...productsArray, {...result} ]})
    })
  }
  

  getAllProductDeliveries(): void {
    this.store.dispatch(getProductDeliveries());
  }

  addNewProductDelivery(): void{
    this.newProductDelivery = Object.assign({}, this.newProductDelivery, { deliverySpecification: { ...this.newProductDelivery.deliverySpecification, 
      arrivalTime : this.newDeliverySpecification.arrivalTime
    }})
    this.store.dispatch(addProductDelivery(this.newProductDelivery));
    console.log("wyslany obiekt", this.newProductDelivery)
    this.newProductDelivery = Object.assign({}, new ProductDelivery) 
  }

}
