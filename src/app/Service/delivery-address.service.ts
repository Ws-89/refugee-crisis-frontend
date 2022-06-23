import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DeliveryAddress } from '../Models/delivery-address';
import { catchError, delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeliveryAddressService {
  private url = 'delivery-address';
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getDeliveryAddresses(): Observable<ReadonlyArray<DeliveryAddress>> {
    return this.http.get<ReadonlyArray<DeliveryAddress>>(`${this.baseUrl}/${this.url}/list`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addDeliveryAddress(deliveryAddress: DeliveryAddress): Observable<DeliveryAddress> {
    return this.http.post<DeliveryAddress>(`${this.baseUrl}/${this.url}/save`, deliveryAddress).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteDeliveryAddress(deliveryAddressId: number) {
    return this.http.delete(`${this.baseUrl}/${this.url}/delete/${deliveryAddressId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateDeliveryAddress(deliveryAddress: DeliveryAddress): Observable<DeliveryAddress> {
    return this.http.put<DeliveryAddress>(`${this.baseUrl}/${this.url}/update`, deliveryAddress).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
