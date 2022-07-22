import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/Service/product.service';
import { FoodType } from '../../Models/food-type.enum';
import { HygienePurpose } from '../../Models/hygiene-purpose.enum';
import { MedicalPurpose } from '../../Models/medical-purpose.enum';
import { Product } from '../../Models/product';
import { StateOfAggregation } from '../../Models/productState.enum';
import { ProductType } from '../../Models/productType.enum';

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
  productState = StateOfAggregation;
  productStateKeys: any = [];
  
  newProduct: Product = new Product();
  products: Product[] = [];
  title = 'products';
  constructor(private productService: ProductService, private dialogRef: MatDialogRef<AddProductsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {}

  ngOnInit(): void {
    this.productTypeKeys = Object.keys(this.productTypes)
    this.foodTypeKeys = Object.keys(this.foodTypes)
    this.hygienePurposeKeys = Object.keys(this.hygienePurpose)
    this.medicalPurposeKeys = Object.keys(this.medicalPurpose)
    this.productStateKeys = Object.keys(this.productState)
  }

  addNewProducts(): void {
    this.productService.saveProduct$(this.newProduct).subscribe(response => {
      this.dialogRef.close();
    })
   }
}

