import { Injectable } from '@nestjs/common';
import { Usuario } from './app.controller';

@Injectable()
export class AppService {
  bdd: Usuario[] = []; //esto le vamos a rEMpLalsar por el archivo JSON

  crearUsuario(usuario: Usuario) {
    //necesito recibir un usuario
    this.bdd.push(usuario);
    return this.bdd;
  }
}
