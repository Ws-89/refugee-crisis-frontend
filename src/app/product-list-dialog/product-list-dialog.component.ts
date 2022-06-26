import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, } from 'rxjs';
import { Product } from '../Models/product';
import { ProductState } from '../Store/Reducers/product.reducers';
import { productSelector } from '../Store/Selector/product.selector';
import { takeUntil } from 'rxjs/operators';
import { deleteProduct,  updateProduct } from '../Store/Actions/product.action';

@Component({
  selector: 'app-product-list-dialog',
  templateUrl: './product-list-dialog.component.html',
  styleUrls: ['./product-list-dialog.component.css']
})
export class ProductListDialogComponent implements OnInit {
  done = new Subject();
  selectedIndex: number = null;
  products$ = this.store.pipe(select(productSelector))
  weight = 0;
  products: Product[];
 
  @Output() selectProduct:EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<ProductState>) { }


  ngOnInit(): void {
    this.products$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.products = JSON.parse(JSON.stringify(data))));
    }

  select(product: Product): void{
    this.selectProduct.emit(product);
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
