import { Component, OnInit } from '@angular/core';
import { AdministrarGruposService } from '../../servicios/administrar-grupos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-nuevo-producto',
  templateUrl: './ruta-nuevo-producto.component.html',
  styleUrls: ['./ruta-nuevo-producto.component.css']
})
export class RutaNuevoProductoComponent implements OnInit {

  constructor(private readonly _adminGruposService: AdministrarGruposService,
              private readonly _activatedRoute: ActivatedRoute
    ) { }

  idProducto: number;
  nombre: string = "";
  descripcion: string = "";
  fechaCreacion: string = "";
  precio: number;
  activo: boolean;
  numeroHorasPorSemana: number; 
  estudianteid: number;

  guardarMateria(formulario){
    this.nombre = formulario.controls.nombre.value;
    this.estudianteid = this.idProducto;
    this._adminGruposService.insertarMateria(this.nombre, this.precio, this.descripcion, this.activo, this.fechaCreacion, this.numeroHorasPorSemana, this.estudianteid)

    console.log('formulario1:', this.nombre);
    const url = ['/menu','revisar-grupos','producto', +this.idProducto];
    this._adminGruposService.redirigir(url);
    
  }

  redireccionar(){
    const url = ['/menu','revisar-grupos','producto', +this.idProducto];
    this._adminGruposService.redirigir(url);
  }

  

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;  //$ significa que es un observable
    
    console.log('inicio');
    
    parametros$
    .subscribe(
      (parametros)=>{  //OK TRY
        console.log('Parametros', parametros);
        this.idProducto= Number(parametros['idProducto']);
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
