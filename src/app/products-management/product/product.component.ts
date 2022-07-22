import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { CustomResponse } from 'src/app/Models/custom-response';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Service/product.service';
// import { updateProduct } from 'src/app/Store/Actions/product.action';
// import { ProductState } from '../../Store/Reducers/product.reducers';
// import { product } from '../../Store/Selector/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product$: Observable<{ appState: string, appData?: CustomResponse<Product>, error?: HttpErrorResponse }>;
  editFlag: boolean = false;
  weight: number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product$ = this.productService.getProduct$(this.route.snapshot.params['id']).pipe(
      map(response => {
        console.log(response);
        return ({appState: 'APP_LOADED', appData: response})
      }),
      startWith({ appState: 'APP_LOADING'}),
      catchError(( error: HttpErrorResponse ) => {
        return of({ appState: 'APP_ERROR', error })}
    ))
    
  }

  enableEdit(product: Product): void {
    this.weight = product.weight
    this.editFlag = true;
  }

  cancelEdit(): void {
    this.editFlag = false;
  }



  update(product: Product): void {
    const p = { ...product };
    p.weight = this.weight;
    console.log(p, '?')
    this.product$ = this.productService.updateProduct$(p).pipe(
      map(response => {
        console.log(response);
        return ({appState: 'APP_LOADED', appData: response})
      }),
      startWith({ appState: 'APP_LOADING'}),
      catchError(( error: HttpErrorResponse ) => {
        return of({ appState: 'APP_ERROR', error })}
    ))
  }


}
