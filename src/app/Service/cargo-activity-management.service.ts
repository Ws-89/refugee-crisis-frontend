import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CargoActivity } from '../Models/cargo-activity';

@Injectable({
  providedIn: 'root'
})
export class CargoActivityManagementService {

  private url = 'cargo-activity';
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addCargoHistoryLogMessage(deliveryHistoryId: number, cargoActivity: CargoActivity): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${this.url}/${deliveryHistoryId}/save`, cargoActivity).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
