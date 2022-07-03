import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FoodType } from '../../Models/food-type.enum';
import { HygienePurpose } from '../../Models/hygiene-purpose.enum';
import { MedicalPurpose } from '../../Models/medical-purpose.enum';
import { Product } from '../../Models/product';
import { ProductState } from '../../Models/productState.enum';
import { ProductType } from '../../Models/productType.enum';
import { addProduct, getProducts, logout } from '../../Store/Actions/product.action';

@Component({
  selector: 'app-add-products-dialog',
  templateUrl: './add-products-dialog.component.html',
  styleUrls: ['./add-products-dialog.component.css']
})
export class AddProductsDialogComponent implements OnInit {
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
  
  newProduct: Product = new Product();
  products: Product[] = [];
  title = 'products';
  constructor(private store: Store, private dialogRef: MatDialogRef<AddProductsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {}

  ngOnInit(): void {
    this.productTypeKeys = Object.keys(this.productTypes)
    this.foodTypeKeys = Object.keys(this.foodTypes)
    this.hygienePurposeKeys = Object.keys(this.hygienePurpose)
    this.medicalPurposeKeys = Object.keys(this.medicalPurpose)
    this.productStateKeys = Object.keys(this.productState)
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.store.dispatch(getProducts());
  }

  addNewProducts(): void {
    this.store.dispatch(addProduct(this.newProduct))
    this.newProduct = Object.assign({}, new Product)
  }
}

