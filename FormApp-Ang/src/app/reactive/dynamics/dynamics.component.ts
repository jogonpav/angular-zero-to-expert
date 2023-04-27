import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html'
})
export class DynamicsComponent {
  
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favourites: this.fb.array( [
      this.fb.control('Metal Gear', Validators.required), //this is a longer way 
      ['Death Stranding', Validators.required] // this is a short way 
    ] , Validators.required)
  })


  constructor(private fb: FormBuilder){}

  get favouriteArr (){
    //return this.myForm.controls['favourites'] as FormArray
    return this.myForm.get('favourites') as FormArray;
  }

  save(){ 
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }
  }

  notFieldValid(field: string){
    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched
  }

}
