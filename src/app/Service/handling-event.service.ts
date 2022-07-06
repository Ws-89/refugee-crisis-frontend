import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HandlingEvent } from '../Models/handling-event';

@Injectable({
  providedIn: 'root'
})
export class HandlingEventService {
  private url = "handling-events";
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getHandlingEventsByTransportId(transportMovementId: number): Observable<ReadonlyArray<HandlingEvent>> {
    return this.http.get<ReadonlyArray<HandlingEvent>>(`${this.baseUrl}/${this.url}/list-of-transport-movement/${transportMovementId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getHandlingEvent(handlingEventId: number): Observable<HandlingEvent> {
    return this.http.get<HandlingEvent>(`${this.baseUrl}/${this.url}/get/${handlingEventId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addHandlingEvent(handlingEvent: HandlingEvent, deliveryId: number, transportId: number): Observable<HandlingEvent> {
    return this.http.post<HandlingEvent>(`${this.baseUrl}/${this.url}/save/${deliveryId}/${transportId}`, handlingEvent).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteHandlingEvent(handlingEventId: number) {
    return this.http.delete(`${this.baseUrl}/${this.url}/delete/${handlingEventId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateHandlingEvent(handlingEvent: HandlingEvent): Observable<HandlingEvent> {
    return this.http.put<HandlingEvent>(`${this.baseUrl}/${this.url}/update`, handlingEvent).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}