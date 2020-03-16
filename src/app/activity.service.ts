import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import { Activity } from './types';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getActivity(id: string): Observable<Activity> {
    return this.httpClient.get<Activity>(api + '/id/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getAllAcivities(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(api);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      'Something bad happened; please try again later.');
  }
  

}

const api = 'https://orangevalleycaa.org/api/videos';
