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
  }

  save(){
    const formValue = {... this.myForm.value}
    delete formValue.terms;
    this.person = formValue;
  }

}
