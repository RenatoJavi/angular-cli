import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css'],
})
export class RutaCreditosComponent implements OnInit {
  constructor(readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const observableParametro$ = this._activatedRoute.params;
    //$ el servicio 'ActiveRoute', me deveulve un obsevable
    //todo parametro tiene el metodo SUSCRIBE

    //Parametros de ruta y de consulta
    const parametrosConsulta$ = this._activatedRoute.queryParams;
    parametrosConsulta$.subscribe((parametroConsulta) => {
      console.log('parametros de cunsulta', parametroConsulta);
    });

    observableParametro$.subscribe(
      (parametros) => {
        console.log('Parametros: ', parametros);
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }
}
