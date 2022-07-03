import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProductDelivery } from '../Models/product-delivery';

@Injectable({
  providedIn: 'root'
})
export class ProductDeliveryService {
  private url = 'delivery';
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getProductDeliveryList(): Observable<ReadonlyArray<ProductDelivery>> {
    return this.http.get<ReadonlyArray<ProductDelivery>>(`${this.baseUrl}/${this.url}/list`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addProductDelivery(productDelivery: ProductDelivery): Observable<ProductDelivery> {
    return this.http.post<ProductDelivery>(`${this.baseUrl}/${this.url}/save`, productDelivery).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  assignProductToPackage(deliveryId: number, productId: number): Observable<String> {
    return this.http.get<String>(`${this.baseUrl}/${this.url}/${deliveryId}/assign/${productId}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  removeProductFromPackage(deliveryId: number, productId: number): Observable<String> {
    return this.http.get<String>(`${this.baseUrl}/${this.url}/${deliveryId}/remove-from-package/${productId}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }


  deleteProductDelivery(productDeliveryId: number) {
    return this.http.delete(`${this.baseUrl}/${this.url}/delete/${productDeliveryId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateProductDelivery(productDelivery: ProductDelivery): Observable<ProductDelivery> {
    return this.http.put<ProductDelivery>(`${this.baseUrl}/${this.url}/update`, productDelivery).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}

