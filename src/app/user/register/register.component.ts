import { Component, EventEmitter, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  alertMessage: string;
  displayAlert: boolean;
  alertClassName;
  firstName = new FormControl('',[Validators.required])
  constructor() {}
  registerForm = new FormGroup({
    firstName: this.firstName
  })

  ngOnInit() {}

  
  async register(e) {
    e.preventDefault();
    this.displayAlert = !this.displayAlert;
    this.alertMessage = ' we are retriving your account';
    const logInBtn = document.querySelector('.loginbtn');
    await setTimeout(() => (this.alertMessage = 'successful'), 2000);
    await setTimeout(() => (this.displayAlert = false), 4000);
    console.log(this.firstName.errors)
  }
}
