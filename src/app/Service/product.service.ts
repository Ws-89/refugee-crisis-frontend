import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Models/api-response';
import { CustomResponse } from '../Models/custom-response';
import { Page } from '../Models/page';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'products'
  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  products$ = (name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page<Product>>> =>
    this.httpClient.get<ApiResponse<Page<Product>>>(`${this.baseUrl}/${this.url}/list?name=${name}&page=${page}&size=${size}`)
      
  saveProduct$ = (product: Product): Observable<CustomResponse<Product>> =>
    this.httpClient.post<Product>(`${this.baseUrl}/${this.url}/save`, product).pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  getProduct$ = (productId: number): Observable<CustomResponse<Product>> =>
    this.httpClient.get<CustomResponse<Product>>(`${this.baseUrl}/${this.url}/get/${productId}`).pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  updateProduct$ = (product: Product): Observable<CustomResponse<Product>> => 
    this.httpClient.put<CustomResponse<Product>>(`${this.baseUrl}/${this.url}/update`, product).pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  deleteProduct$ = (productId: number): Observable<CustomResponse<number>> =>
    this.httpClient.delete(`${this.baseUrl}/${this.url}/delete/${productId}`).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error occurred - Error code: ${error.status}`);
  }
}
