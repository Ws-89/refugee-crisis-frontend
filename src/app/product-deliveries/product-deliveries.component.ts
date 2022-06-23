import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductDelivery } from '../Models/product-delivery';
import { addProductDelivery, getProductDeliveries } from '../Store/Actions/product-delivery.action';

@Component({
  selector: 'app-product-deliveries',
  templateUrl: './product-deliveries.component.html',
  styleUrls: ['./product-deliveries.component.css']
})
export class ProductDeliveriesComponent implements OnInit {
  newProductDelivery: ProductDelivery = new ProductDelivery();
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getAllProductDeliveries();
  }

  getAllProductDeliveries(): void {
    this.store.dispatch(getProductDeliveries());
  }

  addNewProductDelivery(): void{
    this.store.dispatch(addProductDelivery(this.newProductDelivery));
  }

}
