import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favourites: Favourite[];
}

interface Favourite {
  id: number;
  name: string;
}
@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html'
})
export class DynamicsComponent {

  @ViewChild('myform') myForm!: NgForm;

  person: Person = {
    name: 'jose',
    favourites: [
      {id:1, name: 'Metal geard'},
      {id:2, name: 'Death Stranding'}
    ]
  }

  gameNew: string = '';

  save(){
    console.log(this.myForm.value)

    this.person.favourites.push(this.myForm.value)
  }

  add(){
    const favouriteNew: Favourite = {
      id: this.person.favourites.length + 1,
      name: this.gameNew
    }
    
    this.person.favourites.push( favouriteNew )
  }
  

  delete(index : number) {
    this.person.favourites.splice(index,1);
  }

}
