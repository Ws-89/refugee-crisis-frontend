import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FoodType } from 'src/app/Models/food-type.enum';
import { HygienePurpose } from 'src/app/Models/hygiene-purpose.enum';
import { MedicalPurpose } from 'src/app/Models/medical-purpose.enum';
import { Product } from 'src/app/Models/product';
import { ProductState } from 'src/app/Models/productState.enum';
import { ProductType } from 'src/app/Models/productType.enum';
import { AddProductsDialogComponent } from 'src/app/products-management/add-products-dialog/add-products-dialog.component';

import { addProduct,  getProducts, logout } from '../../Store/Actions/product.action';

@Component({
  selector: 'app-products',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent implements OnInit {
  productTypes = ProductType;
  productTypeKeys: any = [];
  foodTypes = FoodType;
  foodTypeKeys: any = [];
  hygienePurpose = HygienePurpose;
  hygienePurposeKeys: any = [];
  medicalPurpose = MedicalPurpose;
  medicalPurposeKeys: any = [];
  productState = ProductState;
  productStateKeys: any = [];
  
  // newProduct: Product = new Product();
  products: Product[] = [];
  title = 'products';
  constructor(private store: Store, public dialog: MatDialog) {}

  ngOnInit(): void {
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
  
}
