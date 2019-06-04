import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AutorizarNombreService } from '../autorizar/autorizar-nombre.service';

@Injectable({
  providedIn: 'root'
})
export class TieneNombreService implements CanActivate{
  

  constructor(private readonly _router:Router,
              private readonly _autorizarNombre: AutorizarNombreService
    ) { }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | 
    import("@angular/router").UrlTree | 
    import("rxjs").Observable<boolean | 
    import("@angular/router").UrlTree> | 
    Promise<boolean | import("@angular/router").UrlTree> {
//throw new Error("Method not implemented.");

      const guardoNombre = this._autorizarNombre.guardoNombre;
      if (guardoNombre) {
        console.log('si guardó');
        return true;
      } else {
        const url = ['/home', 'app'];
        this._router.navigate(url);
        console.log('No tiene permiso');
        return false;
      }


  }

}
