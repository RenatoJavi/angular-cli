import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorizarNombreService {

  guardoNombre: boolean = false;
  nombre: string ="";
  constructor(private readonly _router: Router) { }

  login(nombre: string) {
    if (nombre.length >= 3) {
      this.guardoNombre = true;
      this.nombre = nombre;
      const url = ['/menu', ];
      const parametros = {
        queryParams: {
          nombre: nombre
        }
      };

      this._router.navigate(url, parametros);
      return true;
    }else{
      return false;
    }
  }

  logout(){
    this.guardoNombre = false;
  }
}
