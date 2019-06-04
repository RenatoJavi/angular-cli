import { Component, OnInit } from '@angular/core';
import { AdministrarGruposService } from '../servicios/administrar-grupos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AutorizarNombreService } from 'src/app/autorizar/autorizar-nombre.service';

@Component({
  selector: 'app-ruta-gestion-productos',
  templateUrl: './ruta-gestion-productos.component.html',
  styleUrls: ['./ruta-gestion-productos.component.css']
})
export class RutaGestionProductosComponent implements OnInit {

  idProducto: number;
  materias = [];
  busqueda: string = "";
  constructor(private readonly _adminGrupoService: AdministrarGruposService,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _router: Router,
    private readonly _autorizarNombre: AutorizarNombreService
    ) { }

    buscar(texto) {
      this.busqueda = texto;
      console.log(texto);
      this.materias = this._adminGrupoService.busquedaMateria(texto);
  
    }

    eliminar(id){
      this.materias = this._adminGrupoService.eliminarMateria(id);
    }
    back(){
      const url = ['/menu',];
    const parametros = {
      queryParams: {
        nombre: this._autorizarNombre.nombre
      }
    };

    this._router.navigate(url, parametros);
    }

    redirigir(){
      //[routerLink]="['/menu','revisar-grupos','producto','nuevo']"
      const ruta = ['/menu','revisar-grupos','producto','nuevo',+this.idProducto]
      this._adminGrupoService.redirigir(ruta);
    }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;  //$ significa que es un observable
    
    console.log('inicio');
    
    parametros$
    .subscribe(
      (parametros)=>{  //OK TRY
        console.log('Parametros', parametros);
        this.idProducto = Number(parametros['idProducto']);
        this.materias = this._adminGrupoService.enviarMateriasPorEstudiante(this.idProducto);
      },
      (error)=>{    //CATCH
        console.log('Error: ', error)
      },
      ()=>{ //Completado --> finally
        console.log('completo')
      }
    )

    console.log('fin');
    
  }

}
