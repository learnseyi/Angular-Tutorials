import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  registerForm = new FormGroup({
    name: this.name,
    password: this.password,
  });
  constructor() {}

  ngOnInit() {}
}
