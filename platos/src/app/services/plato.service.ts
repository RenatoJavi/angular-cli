import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

import { ProcesoHttpService } from './proceso-http.service';
import { DishParametros } from '../shared/dish';
import { baseURL } from '../shared/baseUrl';

@Injectable({
  providedIn: 'root',
})
export class PlatoService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcesoHttpService
  ) {}

  getDishes(): Observable<DishParametros[]> {
    return this.http.get(baseURL + 'dishes').pipe(
      map((res) => {
        return this.processHTTPMsgService.extractData(res);
      }),
      catchError((error) => {
        return this.processHTTPMsgService.handleError(error);
      })
    );
  }

  getDish(id: number): Observable<DishParametros> {
    return this.http.get(baseURL + 'dishes/' + id).pipe(
      map((res) => {
        return this.processHTTPMsgService.extractData(res);
      }),
      catchError((error) => {
        return this.processHTTPMsgService.handleError(error);
      })
    );
  }

  getFeaturedDish(): Observable<DishParametros> {
    return this.http.get(baseURL + 'dishes?featured=true').pipe(
      map((res) => {
        return this.processHTTPMsgService.extractData(res)[0];
      }),
      catchError((error) => {
        return this.processHTTPMsgService.handleError(error);
      })
    );
  }
}
