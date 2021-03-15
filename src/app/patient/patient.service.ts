import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import {  throwError } from 'rxjs';
import {  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Patients } from './patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(patients): Observable<Patients> {
    return this.httpClient.post<Patients>(this.apiServer + '/patients/', JSON.stringify(patients), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id): Observable<Patients> {
    return this.httpClient.get<Patients>(this.apiServer + '/patients/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Patients[]> {
    return this.httpClient.get<Patients[]>(this.apiServer + '/patients/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, patients): Observable<Patients> {
    return this.httpClient.put<Patients>(this.apiServer + '/patients/' + id, JSON.stringify(patients), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Patients>(this.apiServer + '/patients/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}