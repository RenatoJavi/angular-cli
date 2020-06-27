import {
  Controller,
  Post,
  Get,
  HttpCode,
  Query,
  Body,
  Param,
  Headers,
  Put,
  UnauthorizedException,
  Header,
  Res,
  Req,
} from '@nestjs/common';

import { AppService } from './app.service';
import { Observable, of, using, noop } from 'rxjs';
import { query } from 'express';
import { create } from 'domain';
import { strict } from 'assert';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //localhost:3000/usuario/crear

  @Get('crear') // metodo GET   HTTP://ip:puerto
  @HttpCode(204)
  raiz(
    @Query() todosQuerryParams: any,
    @Query('nombre') nombre: string,
    @Query('apellido') apellido: string,
    @Query('direccion') direccion: string,
  ): string {
    console.log(todosQuerryParams);
    //nombre = 'niko';
    return 'hola cambiando mi primera linea' + nombre + apellido + direccion;
    // return this.appService.getHello();
  }
  @Get('/segmentoUno:idUsuario')
  //localhost:3000/usuario/segmentoUno/:idUsuario
  parametroRuta(@Param('idUsuario') id) {
    console.log(id);
    return 'id usuario';
  }

  @Get('adiosMundo') // url
  adiosMundo(): string {
    return 'adios mundo con un decorador y el metodo Get';
  }

  @Post('adiosMundoPost')
  adiosMundoPost(): string {
    return 'adios mundo post';
  }

  @Get('adiosMundoPromesa')
  adiosMundoPromesa(): Promise<string> {
    const promesaAdios = (): Promise<string> => {
      return new Promise(resolve => {
        resolve('adios mundo...proemesas');
      });
    };
    return promesaAdios();
  }

  @Get('adiosMundoObservable')
  adiosMundoObservable(): Observable<string> {
    const respuesta$ = of('adios Mundo observable');
    return respuesta$;
  }
  @Post('crearUsuario') //segmento de la URL
  @HttpCode(200) //codigo ok
  crearUsuario(
    @Body() usuario: Usuario, //Tipado ==> Usuario
    @Body('nombre') nombre: string,
    @Headers() cabeceras,
    @Headers('seguridad') codigo,
    @Res() res: Response | any,
    @Req() req: Request | any,
  ) {
    //crear usuario
    //console.log(req);
    console.log(usuario);

    console.log(cabeceras);
    if (codigo === '1234') {
      const bdd = this.appService.crearUsuario(usuario);
      res.append('token', '5678');
      //res.append();
      res.json(bdd);

      //res.json();
      //return 'ok codigo';
    } else {
      throw new UnauthorizedException({
        mensaje: 'error de autorizacion',
        error: 401,
      });
    }
  }

  @Post('crearProducto')
  crearProducto(@Body() producto: Producto) {
    console.log(producto);
    return 'ok producto';
  }
}

export interface Usuario {
  nombre: string;
  apellido: string;
  //  age: number;
}

export interface Producto {
  nombre: string;
  precio: number;
  empresa: string;
}
