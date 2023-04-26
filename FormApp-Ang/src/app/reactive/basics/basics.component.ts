import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
    name: [ 'RTX 4080ti', [Validators.required, Validators.minLength(3)]],
    price: [1500,[Validators.required, Validators.minLength(0)]],
    stocks: [5, [Validators.required, Validators.minLength(0)]],
  })

  constructor( private formBuilder: FormBuilder) { }



}
