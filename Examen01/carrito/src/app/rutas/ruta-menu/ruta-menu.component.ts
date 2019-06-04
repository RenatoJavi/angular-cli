import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ruta-menu',
  templateUrl: './ruta-menu.component.html',
  styleUrls: ['./ruta-menu.component.css']
})
export class RutaMenuComponent implements OnInit {

  acciones = [
    {titulo: 'Comprar',
     path1: 'menu',
     path2: 'comprar'},
    {titulo: 'Administrar Grupos',
      path1: 'menu',
      path2: 'revisar-grupos'},
    {titulo: 'Revisar Compras',
      path1: 'menu',
      path2: 'revisar-compra'}
  ];
  constructor(private readonly _activatedRoute: ActivatedRoute,
              private readonly _router: Router
              ) { }

  redirigir(path1, path2) {
    console.log('/menu', path2);
    const url = ['/menu', path2];
    this._router.navigate(url);
  }


  ngOnInit() {
    const parametros$ = this._activatedRoute.params;  //$ significa que es un observable
    const parametrosConsulta$ = this._activatedRoute.queryParams;
//Ambos parametros no necesitan las funciones "Catch" y "Complete" porque son especiallleeessss

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=>{
        console.log('Parametros consulta:', parametrosConsulta)
      }
    )

    console.log('inicio');
    parametros$
    .subscribe(
      (parametros) => {  //OK TRY
        console.log('Parametros', parametros);
      },
      (error) => {    //CATCH
        console.log('Error: ', error);
      },
      () => { //Completado --> finally
        console.log('completo');
      }
    )

    console.log('fin');

  }

}
