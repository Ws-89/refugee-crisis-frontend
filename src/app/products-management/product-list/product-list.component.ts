import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { ProductState } from '../../Store/Reducers/product.reducers';
import {  productSelector } from '../../Store/Selector/product.selector';
import { takeUntil } from 'rxjs/operators';
import { deleteProduct,  updateProduct } from '../../Store/Actions/product.action';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  done = new Subject();
  selectedIndex: number = null;
  products$ = this.store.pipe(select(productSelector))
  weight = 0;
  products: Product[];
 
  constructor(private store: Store<ProductState>) { }


  ngOnInit(): void {
    this.products$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.products = JSON.parse(JSON.stringify(data))));
    }
  
  enableEdit(product: Product, index: number): void {
    console.log(product)
    this.selectedIndex = index;
    this.weight = product.weight;
  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  // update the earning from the input then dispatch update action
  update(product: Product): void {
    const p = { ...product };
    p.weight = this.weight;
    // dispatch action to update
    this.store.dispatch(updateProduct(p));
    this.selectedIndex = null;
  }

  deleteProduct(productId: number): void {
    this.store.dispatch(deleteProduct(productId));
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }
}

