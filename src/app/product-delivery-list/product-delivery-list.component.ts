import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { ProductDelivery } from '../Models/product-delivery';
import { ProductDeliveryService } from '../Service/product-delivery.service';
import { ProductDeliveryState } from '../Store/Reducers/product-delivery.reducers';
import { productDeliverySelector } from '../Store/Selector/product-delivery.selector';
import { takeUntil } from 'rxjs/operators';
import { deleteProductDelivery, updateProductDelivery } from '../Store/Actions/product-delivery.action';

@Component({
  selector: 'app-product-delivery-list',
  templateUrl: './product-delivery-list.component.html',
  styleUrls: ['./product-delivery-list.component.css']
})
export class ProductDeliveryListComponent implements OnInit {
  productDeliveries$ = this.store.pipe(select(productDeliverySelector));
  productDeliveries: ProductDelivery[];
  done = new Subject();
  selectedIndex: number = null;
  capacity: number = 0;

  constructor(private store: Store<ProductDeliveryState>) { }

  ngOnInit(): void {
    this.productDeliveries$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.productDeliveries = JSON.parse(JSON.stringify(data))));
  }

  enableEdit(productDelivery: ProductDelivery, index: number): void {
    this.selectedIndex = index;
    this.capacity = productDelivery.capacity;
  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  update(productDelivery: ProductDelivery): void {
    const pd = {...productDelivery};
    pd.capacity = this.capacity;
    this.store.dispatch(updateProductDelivery(pd));
    this.selectedIndex = null;
  }

  delete(productDeliveryId: number): void {
    this.store.dispatch(deleteProductDelivery(productDeliveryId));
  }

  ngOnDestroy(){
    this.done.next();
    this.done.complete();
  }

}
