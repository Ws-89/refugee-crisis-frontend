import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';

import { filter } from 'rxjs/operators';
import {  untilDestroyed } from '@ngneat/until-destroy';
import { BreakpointObserver } from '@angular/cdk/layout'
import { NavigationEnd, Router } from '@angular/router';
import { Product } from './Models/product';
import { ProductService } from './Service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  products: Product[] = [];
  newProduct: Product = new Product();

  title = 'Refugee crisis app';
  constructor(private store: Store, private observer: BreakpointObserver, private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    // this.getAllProducts();
    // this.getAllDeliveryAddresses();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
      this.router.events
      .pipe(
       
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  // getAllDeliveryAddresses(): void {
  //   this.store.dispatch(getDeliveryAddresses());
  // }
  
  // getAllProducts(): void {
  //   this.store.dispatch(getProducts());
  // }

  // addNewProducts(): void {
  //   this.store.dispatch(addProduct(this.newProduct));
  // }
   
}
