import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.comoment';


@NgModule({
  declarations:[
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ],
  imports:[

  ]

})
export class ContadorModule {

}
