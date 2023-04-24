import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent {

  persona = {
    gender: '',
    notifications: true
  }
  termsConditions: boolean = false;

}
