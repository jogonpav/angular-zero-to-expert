import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './template/basics'
    },
    {
      text: 'Dynamics',
      route: './template/dynamics'
    },
    {
      text: 'Switches',
      route: './template/switches'
    }
  ]

  reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basics'
    },
    {
      text: 'Dynamics',
      route: './reactive/dynamics'
    },
    {
      text: 'Switches',
      route: './reactive/switches'
    }
  ]

  authMenu: MenuItem[] = [
    {
      text: 'singup',
      route: './auth/register'
    },
    {
      text: 'SingIn',
      route: './auth/login'
    }
  ]

}
