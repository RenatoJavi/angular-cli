import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClienteService {
  baseurl = 'http:localhost:3000';

  constructor(private http: HttpClient) {}
}
