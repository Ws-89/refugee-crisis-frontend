import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../Models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private url = 'vehicles';
  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getVehiclesList(): Observable<ReadonlyArray<Vehicle>>{
    return this.httpClient.get<ReadonlyArray<Vehicle>>(`${this.baseUrl}/${this.url}/list`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
   }

   addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient.post<Vehicle>(`${this.baseUrl}/${this.url}/save`, vehicle).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient.put<Vehicle>(`${this.baseUrl}/${this.url}/update`, vehicle).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteVehicle(vehicleId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${this.url}/delete/${vehicleId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getMaxiumCapacity(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${this.url}/highest-capacity`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
