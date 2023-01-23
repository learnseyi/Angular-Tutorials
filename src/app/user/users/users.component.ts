import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  display = true;
  message: string = 'I am test';
  className: string = 'test';
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  registerForm = new FormGroup({
    name: this.name,
    password: this.password,
  });
  constructor() {
    console.log(this.registerForm.controls.name);
  }

  ngOnInit() {}
}
