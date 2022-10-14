import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

/**
 * Declarations are an array, and say that things have the module, for example, components, pipes, etc.
 *  exports: the things that are in the declarations are invisible to the rest of the application, but what is in the exports can be used elsewhere in the app
 * imports: modules go inside imports
*/

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports:[
    //CommonModule allows using the directives and other things of angular
    CommonModule
  ]
})
export class HeroesModule {

}
