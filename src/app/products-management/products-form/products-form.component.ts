import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, startWith, map, takeUntil } from 'rxjs/operators'
import { FoodType } from 'src/app/Models/food-type.enum';
import { HygienePurpose } from 'src/app/Models/hygiene-purpose.enum';
import { MedicalPurpose } from 'src/app/Models/medical-purpose.enum';
import { Product } from 'src/app/Models/product';
import { ProductType } from 'src/app/Models/productType.enum';
import { Status } from 'src/app/Models/status.enum';
import { AddProductsDialogComponent } from 'src/app/products-management/add-products-dialog/add-products-dialog.component';
import { StateOfAggregation } from 'src/app/Models/productState.enum';
import { Page } from 'src/app/Models/page';
import { ProductService } from 'src/app/Service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from 'src/app/Models/api-response';

@Component({
  selector: 'app-products',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent implements OnInit {
  done = new Subject();
  // products$ = this.store2.pipe(select(availableProducts(Status.Available)))
  productTypes = ProductType;
  productTypeKeys: any = [];
  foodTypes = FoodType;
  foodTypeKeys: any = [];
  hygienePurpose = HygienePurpose;
  hygienePurposeKeys: any = [];
  medicalPurpose = MedicalPurpose;
  medicalPurposeKeys: any = [];
  productState = StateOfAggregation;
  productStateKeys: any = [];
  newProduct: Product = new Product();
  products: Product[] = [];
  title = 'products';
  productsState$: Observable<{ appState: string, appData?: ApiResponse<Page<Product>>, error?: HttpErrorResponse }>;
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();
  responseSubject = new BehaviorSubject<ApiResponse<Page<Product>>>(null);


  constructor(private store: Store, public dialog: MatDialog, private productService: ProductService) {}

  ngOnInit(): void {
    this.productsState$ = this.productService.products$().pipe(
      map((response: ApiResponse<Page<Product>>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number)
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response });
      }),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) =>{ 
        return of({ appState: 'APP_ERROR', error })}
        )
    )
    
    this.productTypeKeys = Object.keys(this.productTypes)
    this.foodTypeKeys = Object.keys(this.foodTypes)
    this.hygienePurposeKeys = Object.keys(this.hygienePurpose)
    this.medicalPurposeKeys = Object.keys(this.medicalPurpose)
    this.productStateKeys = Object.keys(this.productState)
  }

  goToPage(name?: string, pageNumber: number = 0): void {
  this.productsState$ = this.productService.products$(name, pageNumber).pipe(
    map((response: ApiResponse<Page<Product>>) => {
      this.responseSubject.next(response);
      this.currentPageSubject.next(pageNumber);
      console.log(response);
        return ({ appState: 'APP_LOADED', appData: response });
      }),
      startWith({ appState: 'APP_LOADED', appData: this.responseSubject.value }),
      catchError((error: HttpErrorResponse) =>{ 
        return of({ appState: 'APP_ERROR', error })}
        )
    )
  }

  goToNextOrPrevious(direction? : string, name?: string): void{
    this.goToPage(name, direction === 'forward' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1);
  }

  openProductDialog(){
    let dialogRef = this.dialog.open(AddProductsDialogComponent);
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct$(productId).subscribe(response =>{
      this.goToPage('', this.currentPageSubject.value)
    })
  }

}
