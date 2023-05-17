import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { cantBeStrider, emailPattern, nameLastNamePatter } from 'src/app/shared/validator/validations'; //Validators whome no requires services to be implmented
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.nameLastNamePatter)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    username: ['', [Validators.required, this.vs.cantBeStrider]]
  }

  )

  constructor(private fb: FormBuilder, private vs: ValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: "José Gonzalo",
      email: 'test1@email.com',
      username: 'snipers'
    })
  }

  fieldInvalid(field: string) {
    return this.myForm.get(field)?.invalid
      && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value)
    this.myForm.markAllAsTouched();
  }



}
