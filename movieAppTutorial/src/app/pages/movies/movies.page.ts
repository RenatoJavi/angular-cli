import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  //in this page we will at  some point get results

  results: Observable<any>; //creo la funcionalidad y later see how get the results
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  // /**
  //  * Constructor of our first page
  //   @param movieService The movie Service to get data
  //  */
  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type); //search type is our own type

    //   this.results.subscribe(
    // (res)=>{

    // },
    // ()=>{}

    // )
  }
}
//HAY DOS FORMAS para suscribirse al OBSERVABLE
// 1. //the view we will GET the results what we could do as well is using suscribe
//so this is the way to get data from an OBSERVABLE
//this.results.subscribe(

// 2.  Second way...es ir a la pagina movies.page.html
