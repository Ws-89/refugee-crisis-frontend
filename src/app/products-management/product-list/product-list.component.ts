import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { ProductState } from '../../Store/Reducers/product.reducers';
import {  productSelector, availableProducts } from '../../Store/Selector/product.selector';
import { takeUntil } from 'rxjs/operators';
import { deleteProduct,  updateProduct } from '../../Store/Actions/product.action';
import { Product } from 'src/app/Models/product';
import { Status } from 'src/app/Models/status.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  done = new Subject();
  selectedIndex: number = null;
  products$ = this.store.pipe(select(availableProducts(Status.Available)))
  weight = 0;
  products: Product[];
 
  constructor(private store: Store<ProductState>) { }


  ngOnInit(): void {
    this.products$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.products = JSON.parse(JSON.stringify(data))));
    }
  
  deleteProduct(productId: number): void {
    this.store.dispatch(deleteProduct(productId));
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }
}

