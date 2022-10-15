import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {


  // personajes: Personaje[] =[];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  /*
  *this is other form for calling the data in the services
  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }
  */

  /*agregarNuevoPersonaje(character: Personaje) {
    this.personajes.push( character )
  }*/

  /*constructor(private dbzService: DbzService){
    // this.personajes = dbzService.personajes; //this is other form for calling the data in the services
  }*/

  constructor () {
    
  }

}
