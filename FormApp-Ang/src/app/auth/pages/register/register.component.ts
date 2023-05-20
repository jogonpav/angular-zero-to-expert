import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { cantBeStrider, emailPattern, nameLastNamePatter } from 'src/app/shared/validator/validations'; //Validators whome no requires services to be implmented
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.nameLastNamePatter)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [this.vs.fieldEquals('password', 'password2')]
  }

  )

  constructor(private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: "Jose Gonzalo",
      email: 'test1@email.com',
      username: 'snipers',
      password: '123456',
      password2: '123456',
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
