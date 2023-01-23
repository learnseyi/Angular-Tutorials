import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  display: boolean = false;
  message: string = 'I am test';
  className: string = 'success';
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  loginForm = new FormGroup({
    name: this.name,
    password: this.password,
  });

  constructor(private modal: ModalService) {
    console.log(this.loginForm.controls.name);
  }

  async logIn() {
    this.display = !this.display;
    this.message = ' we are retriving your account';
    const logInBtn = document.querySelector('.loginbtn');
    await setTimeout(() => (this.message = 'successful'), 2000);
    await setTimeout(() => (this.display = false), 4000);
  }

  ngOnInit() {}
}
