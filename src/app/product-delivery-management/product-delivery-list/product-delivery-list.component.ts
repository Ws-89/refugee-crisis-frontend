import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { ProductDelivery } from '../../Models/product-delivery';
import { ProductDeliveryState } from '../../Store/Reducers/product-delivery.reducers';
import { productDeliverySelector } from '../../Store/Selector/product-delivery.selector';
import { takeUntil } from 'rxjs/operators';
import { deleteProductDelivery, updateProductDelivery } from '../../Store/Actions/product-delivery.action';
import { TransportMovement } from 'src/app/Models/transport-movement';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-delivery-list',
  templateUrl: './product-delivery-list.component.html',
  styleUrls: ['./product-delivery-list.component.css']
})
export class ProductDeliveryListComponent implements OnInit {
  productDeliveries$ = this.store.pipe(select(productDeliverySelector));
  productDeliveries: ProductDelivery[];
  done = new Subject();
  totalWeight: number = 0;
  selectedDeliveryIndex: number = 0;

  @Output() selectProductDelivery:EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<ProductDeliveryState>) { }

  ngOnInit(): void {
    this.productDeliveries$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.productDeliveries = JSON.parse(JSON.stringify(data))));
  }

  select(productDelivery: ProductDelivery): void{
    this.selectedDeliveryIndex = productDelivery.deliveryId;
    this.selectProductDelivery.emit(productDelivery);
  } 

  delete(productDeliveryId: number): void {
    this.store.dispatch(deleteProductDelivery(productDeliveryId));
  }

  ngOnDestroy(){
    this.done.next();
    this.done.complete();
  }

}
