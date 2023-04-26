import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basics.component.html'
})
export class BasicsComponent {

/*   myForm: FormGroup = new FormGroup(
    { 
      'name': new FormControl('RTX 4080ti'),
      'price': new FormControl(1500),
      'stocks': new FormControl(5),
    }
  ) */

  myForm: FormGroup = this.formBuilder.group({
    nombre: [ 'RTX 4080ti'],
    price: [1500],
    stocks: [5],
  })

  constructor( private formBuilder: FormBuilder) { }



}
