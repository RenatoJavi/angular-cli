import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcesoHttpService {
  constructor(private http: HttpClient) {
    console.log('proceso http');
  }
  public extractData(res) {
    const body = res.json();
    return body || {};
  }
  public handleError(error: HttpErrorResponse | any) {
    let erroMsg: string;
    if (error.error instanceof HttpErrorResponse) {
      erroMsg = error.error.message;
    } else {
      // erroMsg = error.message ? error.message : error.toString();
      erroMsg = `${error.error} - ${error || ''} --${error.message} `;
    }
    console.log(erroMsg);
    return throwError(erroMsg);

    // const result = throwError(new Error('opps'));

    // const susbcribe = result.subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => console.log('Complete!'),
    //   error: (val) => console.log(`Error: ${val}`),
    // });
    // return susbcribe;
  }
}
