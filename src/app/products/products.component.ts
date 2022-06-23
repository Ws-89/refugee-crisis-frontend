import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FoodType } from '../Models/foodType.enum';
import { HygienePurpose } from '../Models/hygienePurpose.enum';
import { MedicalPurpose } from '../Models/medicalPurpose.enum';
import { Product } from '../Models/product';
import { ProductState } from '../Models/productState.enum';
import { ProductType } from '../Models/productType.enum';
import { getDeliveryAddresses } from '../Store/Actions/delivery-address.action';
import { addProduct, changeProductType, getProducts, logout } from '../Store/Actions/product.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
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
  constructor(private store: Store) {}

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
    this.store.dispatch(addProduct(this.newProduct));
  }

  logout(): void {
    this.store.dispatch(logout());
  }
  
}
