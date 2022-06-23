import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8082/api/v1/products'
  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<ReadonlyArray<Product>>{
    return this.httpClient.get<ReadonlyArray<Product>>('http://localhost:8082/api/v1/products/list').pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
   }

   addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.url}/save`, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.url}/update`, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteProduct(productId: number) {
    return this.httpClient.delete(`${this.url}/delete/${productId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
