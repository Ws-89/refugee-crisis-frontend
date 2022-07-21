import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { ProductDelivery } from 'src/app/Models/product-delivery';
import { ProductDeliveryService } from 'src/app/Service/product-delivery.service';
import { getProductDeliveryList, updateProductDelivery } from 'src/app/Store/Actions/product-delivery.action';
import { ProductDeliveryState } from '../../Store/Reducers/product-delivery.reducers';
import { productDelivery } from '../../Store/Selector/product-delivery.selector';

@Component({
  selector: 'app-product-delivery',
  templateUrl: './product-delivery.component.html',
  styleUrls: ['./product-delivery.component.css']
})
export class ProductDeliveryComponent implements OnInit {
  productDelivery$ = this.store.pipe(select(productDelivery));
  totalWeight: number;
  
  constructor(private store: Store<ProductDeliveryState>, private productDeliveryService: ProductDeliveryService, private router: Router) {}

  ngOnInit(): void {
    
  }

  deleteProductFromPackage(productDeliveryIndex: number, productIndex: number){
    this.productDeliveryService.removeProductFromPackage(productDeliveryIndex, productIndex).subscribe(
      res => {
        this.store.dispatch(getProductDeliveryList())
      }
      
    )
  }

  finishPreparingCargo(deliveryId: number){
    this.productDeliveryService.finishCargoCompletion(deliveryId).subscribe(
      res => {
        this.store.dispatch(getProductDeliveryList())
        this.router.navigate(['/product-delivery'])
      }
      
    )
  }

  update(vehicle: ProductDelivery): void {
    const p = { ...vehicle };
    p.totalWeight = this.totalWeight;
    // dispatch action to update
    this.store.dispatch(updateProductDelivery(p));
  }

 
}
