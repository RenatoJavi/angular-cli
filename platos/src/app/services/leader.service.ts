import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcesoHttpService } from './proceso-http.service';
import { baseURL } from '../shared/baseUrl';
import { Leader } from '../shared/lider';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcesoHttpService
  ) {}

  getLeaders(): Observable<Leader[]> {
    return this.http.get(baseURL + 'leaders').pipe(
      map((res) => {
        return this.processHTTPMsgService.extractData(res);
      }),
      catchError((error) => {
        return this.processHTTPMsgService.handleError(error);
      })
    );
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get(baseURL + 'leader/' + id).pipe(
      map((res) => {
        return this.processHTTPMsgService.extractData(res);
      }),
      catchError((error) => {
        return this.processHTTPMsgService.handleError(error);
      })
    );
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get(baseURL + 'leaders?featured=true').pipe(
      map((res) => {
        return this.processHTTPMsgService.extractData(res)[0];
      }),
      catchError((error) => {
        return this.processHTTPMsgService.handleError(error);
      })
    );
  }
}
