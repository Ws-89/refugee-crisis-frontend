import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ProductDeliveryState } from '../../Store/Reducers/product-delivery.reducers';
import { productDelivery } from '../../Store/Selector/product-delivery.selector';

@Component({
  selector: 'app-product-delivery',
  templateUrl: './product-delivery.component.html',
  styleUrls: ['./product-delivery.component.css']
})
export class ProductDeliveryComponent implements OnInit {
  productDelivery$ = this.store.pipe(select(productDelivery));
  constructor(private store: Store<ProductDeliveryState>) {}

  ngOnInit(): void {
  }

}
