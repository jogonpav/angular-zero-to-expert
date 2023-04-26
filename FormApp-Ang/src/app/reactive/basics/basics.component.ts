import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {

/*   myForm: FormGroup = new FormGroup(
    { 
      'name': new FormControl('RTX 4080ti'),
      'price': new FormControl(1500),
      'stocks': new FormControl(5),
    }
  ) */

  myForm: FormGroup = this.formBuilder.group({
    name: [ , [Validators.required, Validators.minLength(3)]],
    price: [ ,[Validators.required, Validators.minLength(0)]],
    stocks: [ , [Validators.required, Validators.minLength(0)]],
  })

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.myForm.reset(
        {
          name: 'RTX 4080ti',
          price: 1600
        }
      )
  }

  save() {

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset();
  }

  notFieldValid(field: string){
    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched
  }

}
