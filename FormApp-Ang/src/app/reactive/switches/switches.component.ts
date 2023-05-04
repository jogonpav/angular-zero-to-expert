import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [true, Validators.requiredTrue]

  })
  person = {
    gender: 'F',
    notifications: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({ ...this.person, terms: true })
    
    //next code is for changes by value
    /* this.myForm.get('terms')?.valueChanges.subscribe( newValue => {
      console.log(newValue);
    }) */

    this.myForm.valueChanges.subscribe( ({terms, ...restArg })=>//form => 
      {  
      //delete form.conditions
      //this.person = form;
      this.person = restArg;
    })
  }

  save(){
    const formValue = {... this.myForm.value}
    delete formValue.terms;
    this.person = formValue;
  }

}
