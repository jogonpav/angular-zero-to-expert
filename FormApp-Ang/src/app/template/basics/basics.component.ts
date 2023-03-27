import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent {

  @ViewChild('myForm') myForm!:NgForm;

  save(){
    console.log(this.myForm)
    
  }

  validName (){
    return this.myForm?.controls['product']?.invalid && this.myForm?.controls['product']?.touched
  }
  validPrice (){
    return this.myForm?.controls['price']?.invalid && this.myForm?.controls['price']?.touched
  }

}
