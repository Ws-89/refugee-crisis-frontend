import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Product } from '../Models/product';
import { ProductState } from '../Models/productState.enum';
import { ProductType } from '../Models/productType.enum';
import { addProduct, getProducts, logout } from '../Store/Actions/product.action';

@Component({
  selector: 'app-add-products-dialog',
  templateUrl: './add-products-dialog.component.html',
  styleUrls: ['./add-products-dialog.component.css']
})
export class AddProductsDialogComponent implements OnInit {
  productTypes = ProductType;
  productTypeKeys: any = [];
  // foodTypes = FoodType;
  // foodTypeKeys: any = [];
  // hygienePurpose = HygienePurpose;
  // hygienePurposeKeys: any = [];
  // medicalPurpose = MedicalPurpose;
  // medicalPurposeKeys: any = [];
  productState = ProductState;
  productStateKeys: any = [];
  
  newProduct: Product = new Product();
  products: Product[] = [];
  title = 'products';
  constructor(private store: Store, private dialogRef: MatDialogRef<AddProductsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {}

  ngOnInit(): void {
    this.productTypeKeys = Object.keys(this.productTypes)
    // this.foodTypeKeys = Object.keys(this.foodTypes)
    // this.hygienePurposeKeys = Object.keys(this.hygienePurpose)
    // this.medicalPurposeKeys = Object.keys(this.medicalPurpose)
    this.productStateKeys = Object.keys(this.productState)
    this.getAllProducts();
  }

  selectProduct(product: Product){
    this.dialogRef.close(product);
  }

  getAllProducts(): void {
    this.store.dispatch(getProducts());
  }

  addNewProducts(): void {
    this.dialogRef.close(this.newProduct);
  }
}

