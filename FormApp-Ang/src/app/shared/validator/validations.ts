import { FormControl } from "@angular/forms";

//this file is a way inluide custom validators when is no necesary to inject services or other dependencies

export const nameLastNamePatter: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

export const cantBeStrider = (control: FormControl) => {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        isStrider: true
      }
    }
    return null;
  }