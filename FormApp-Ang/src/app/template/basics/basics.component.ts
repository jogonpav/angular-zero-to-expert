import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent {

  @ViewChild('myForm') myForm!:NgForm;

  initForm = {
    producto: '',
    price: 0,
    stocks: 0
  }

  save(){
    this.myForm.resetForm({
      price: 0,
      stocks: 0
    })
  }

  validName (){
    return this.myForm?.controls['product']?.invalid && this.myForm?.controls['product']?.touched
  }
  validPrice (){
    return this.myForm?.controls['price']?.invalid && this.myForm?.controls['price']?.touched
  }
  validStocks (){
    return this.myForm?.controls['stocks']?.invalid && this.myForm?.controls['stocks']?.touched
  }

}
