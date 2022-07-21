import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { FoodType } from 'src/app/Models/food-type.enum';
import { HygienePurpose } from 'src/app/Models/hygiene-purpose.enum';
import { MedicalPurpose } from 'src/app/Models/medical-purpose.enum';
import { Product } from 'src/app/Models/product';
import { ProductType } from 'src/app/Models/productType.enum';
import { Status } from 'src/app/Models/status.enum';
import { AddProductsDialogComponent } from 'src/app/products-management/add-products-dialog/add-products-dialog.component';
import { availableProducts } from 'src/app/Store/Selector/product.selector';
import { ProductState } from '../../Store/Reducers/product.reducers';
import { addProduct,  deleteProduct,  getProducts, logout } from '../../Store/Actions/product.action';
import { StateOfAggregation } from 'src/app/Models/productState.enum';

@Component({
  selector: 'app-products',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent implements OnInit {
  done = new Subject();
  products$ = this.store2.pipe(select(availableProducts(Status.Available)))
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
  
  // newProduct: Product = new Product();
  products: Product[] = [];
  title = 'products';
  constructor(private store: Store, public dialog: MatDialog, private store2: Store<ProductState>) {}

  ngOnInit(): void {
    this.products$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.products = JSON.parse(JSON.stringify(data))));
    
    this.productTypeKeys = Object.keys(this.productTypes)
    this.foodTypeKeys = Object.keys(this.foodTypes)
    this.hygienePurposeKeys = Object.keys(this.hygienePurpose)
    this.medicalPurposeKeys = Object.keys(this.medicalPurpose)
    this.productStateKeys = Object.keys(this.productState)
    this.getAllProducts();
  }

  openProductDialog(){
    let dialogRef = this.dialog.open(AddProductsDialogComponent);
  }

  getAllProducts(): void {
    this.store.dispatch(getProducts());
  }

  addNewProducts(product: Product): void {
    this.store.dispatch(addProduct(product));
    
  }

  logout(): void {
    this.store.dispatch(logout());
  }
  deleteProduct(productId: number): void {
    this.store.dispatch(deleteProduct(productId));
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }
}
