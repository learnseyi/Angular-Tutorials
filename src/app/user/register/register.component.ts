import { Component, EventEmitter, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  alertMessage: string;
  displayAlert: boolean;
  alertClassName;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  userName = new FormControl('', [Validators.required]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    ),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),
  ]);

  constructor(private auth: AngularFireAuth) {}

  registerForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    userName: this.userName,
    email: this.email,
    password: this.password
  });

 

  ngOnInit() {}

  async register(e) {
    e.preventDefault();
    // destructure 
    const {email,password} = this.registerForm.value
    this.displayAlert = !this.displayAlert;
    this.alertMessage = ' we are retriving your account';
    const logInBtn = document.querySelector('.loginbtn');
    // conect to firebase and create user
    const userCred = await this.auth.createUserWithEmailAndPassword(
      email as string,
      password as string
    );
    await setTimeout(() => (this.alertMessage = 'successful'), 2000);
    await setTimeout(() => (this.displayAlert = false), 4000);
    console.log(this.firstName.errors);
  }
}
