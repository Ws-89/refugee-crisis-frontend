import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from 'src/app/Models/product';
import { updateProduct } from 'src/app/Store/Actions/product.action';
import { ProductState } from '../../Store/Reducers/product.reducers';
import { product } from '../../Store/Selector/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product$ = this.store.pipe(select(product));
  editFlag: boolean = false;
  weight: number = 0;

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    
  }

  enableEdit(product: Product): void {
    this.weight = product.weight
    this.editFlag = true;
  }

  cancelEdit(): void {
    this.editFlag = false;
  }


  // update the earning from the input then dispatch update action
  update(product: Product): void {
    const p = { ...product };
    p.weight = this.weight;
    // dispatch action to update
    this.store.dispatch(updateProduct(p));
  }

  // deleteProduct(productId: number): void {
  //   this.store.dispatch(deleteProduct(productId));
  // }
}
