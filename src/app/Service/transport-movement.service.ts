import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TransportMovement } from '../Models/transport-movement';

@Injectable({
  providedIn: 'root'
})
export class TransportMovementService {
  private url = 'transport-movement';
  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getTransportMovementList(): Observable<ReadonlyArray<TransportMovement>>{
    return this.httpClient.get<ReadonlyArray<TransportMovement>>(`${this.baseUrl}/${this.url}/list`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
   }

   addTransportMovement(transportMovement: TransportMovement): Observable<TransportMovement> {
    return this.httpClient.post<TransportMovement>(`${this.baseUrl}/${this.url}/save`, transportMovement).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateTransportMovement(transportMovement: TransportMovement): Observable<TransportMovement> {
    return this.httpClient.put<TransportMovement>(`${this.baseUrl}/${this.url}/update`, transportMovement).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteTransportMovement(transportMovementId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${this.url}/delete/${transportMovementId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  // getMaxiumCapacity(): Observable<any> {
  //   return this.httpClient.get(`${this.baseUrl}/${this.url}/highest-capacity`).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error(error);
  //       return throwError(error);
  //     })
  //   );
  // }
}