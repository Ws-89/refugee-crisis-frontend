import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { ProductDelivery } from 'src/app/Models/product-delivery';
import { Status } from 'src/app/Models/status.enum';
import { deleteProductDelivery, updateProductDelivery } from 'src/app/Store/Actions/product-delivery.action';
import { ProductDeliveryState } from 'src/app/Store/Reducers/product-delivery.reducers';
import { availableProductsDelivery, productDeliverySelector } from 'src/app/Store/Selector/product-delivery.selector';

@Component({
  selector: 'app-product-transport',
  templateUrl: './product-transport.component.html',
  styleUrls: ['./product-transport.component.css']
})
export class ProductTransportComponent implements OnInit {
  productDeliveries$ = this.store.pipe(select(availableProductsDelivery(Status.Available)));
  productDeliveries: ProductDelivery[];
  done = new Subject();
  selectedIndex: number = null;
  totalWeight: number = 0;
  selectedDeliveryIndex: number = null;

  @Output() selectProductDelivery:EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<ProductDeliveryState>) { }

  ngOnInit(): void {
    this.productDeliveries$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.productDeliveries = JSON.parse(JSON.stringify(data))));
  }

  selectDelivery(productDelivery: ProductDelivery): void{
    this.selectedDeliveryIndex = productDelivery.deliveryId;
    this.selectProductDelivery.emit(productDelivery);
  } 

  enableEdit(productDelivery: ProductDelivery, index: number): void {
    this.selectedIndex = index;
    this.totalWeight = productDelivery.totalWeight;
  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  update(productDelivery: ProductDelivery): void {
    const pd = {...productDelivery};
    pd.totalWeight = this.totalWeight;
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
