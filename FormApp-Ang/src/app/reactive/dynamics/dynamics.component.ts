import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html'
})
export class DynamicsComponent {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favourites: this.fb.array([
      this.fb.control('Metal Gear', Validators.required), //this is a longer way 
      ['Death Stranding', Validators.required] // this is a short way 
    ], Validators.required)
  })

  //favouriteNew: FormControl = new FormControl('', Validators.required);
  favouriteNew: FormControl = this.fb.control('', Validators.required)

  constructor(private fb: FormBuilder) { }

  get favouriteArr() {
    //return this.myForm.controls['favourites'] as FormArray
    return this.myForm.get('favourites') as FormArray;
  }

  addFavourite() {
    if (this.favouriteNew.invalid) { return }

    //((this.myForm.controls['favourites']) as FormArray).push(new FormControl(this.favouriteNew.value))

    //this.favouriteArr.push(this.favouriteNew); //this form is not correct beacause JS uses variables by reference
    //this.favouriteArr.push(new FormControl(this.favouriteNew.value, Validators.required)); //It's necessary to declare the form control variable again
    this.favouriteArr.push(this.fb.control(this.favouriteNew.value, Validators.required)) //this form using FormBuilder
    this.favouriteNew.reset();
  }

  delete(element: number){
    this.
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return
    }
  }

  notFieldValid(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

}
