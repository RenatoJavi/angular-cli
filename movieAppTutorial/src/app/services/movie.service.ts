import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType { //para tipar
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode',
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://www.omdbapi.com';
  apikey = 'd4103b58';

  constructor(private http: HttpClient) {}
  // /**
  //  * Get data from the OmdbApi
  //  * map the result to return only the results that we need
  //  *
  //  * @param {string} title Search Term
  //  * @param {SearchType} type movie, series, episode or empty
  //  * @returns Observable with the search results
  //  */
  searchData(title: string, type: SearchType): Observable<any> {
    //we can define the retun value which is an observable
    //es de tipo any, because we are not returning anything yet

    return this.http
      .get(
        // here get the information fron the API
        `${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apikey}`
      )
      .pipe(
        //aplicamos un filtro y funciones dentro del pipe
        map((results) => results['Search'])
      );
  }

  getDetails(ids: string) {
    //here is calling again the   url ... ID for whatever it is movie episode
    return this.http.get(
      `${this.url}?i=${ids}&plot=full&apikey=${this.apikey}`
    );
  }
}
