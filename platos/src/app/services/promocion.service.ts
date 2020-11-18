import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcesoHttpService } from './proceso-http.service';
import { baseURL } from '../shared/baseUrl';
import { Leader } from '../shared/lider';
import { map, catchError } from 'rxjs/operators';
import { Promotion } from '../shared/promotion';

@Injectable({
  providedIn: 'root',
})
export class PromocionService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcesoHttpService
  ) {}

  getPromotions(): Observable<Promotion[]> {
    return this.http.get(baseURL + 'promotions').pipe(
      map((res) => {
        return this.processHTTPMsgService.extractData(res);
      }),
      catchError((error) => {
        return this.processHTTPMsgService.handleError(error);
      })
    );
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions/' + id).pipe(
      map((res) => {
        return this.processHTTPMsgService.extractData(res);
      }),
      catchError((error) => {
        return this.processHTTPMsgService.handleError(error);
      })
    );
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions?featured=true').pipe(
      map((res) => {
        return this.processHTTPMsgService.extractData(res)[0];
      }),
      catchError((error) => {
        return this.processHTTPMsgService.handleError(error);
      })
    );
  }
}
