import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegueta',
      poder: 7500
    }
  ];

  get Personajes(): Personaje[]{
    return [...this._personajes]; //It's important to use operator spread because JS uses varible by reference;
  }

  constructor(){}

  agregarPersonaje (personaje: Personaje){
    this._personajes.push( personaje )
  }

}
