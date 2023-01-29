import { Component, EventEmitter, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IuserData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: number;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  alertMessage: string;
  displayAlert: boolean;
  alertClassName;
  userData: IuserData;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  userName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    ),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),
  ]);

  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {}

  registerForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    userName: this.userName,
    email: this.email,
    password: this.password,
  });

  ngOnInit() {}

  async register(e) {
    e.preventDefault();
    // destructure
    const { email, password } = this.registerForm.value;
    this.displayAlert = !this.displayAlert;
    this.alertMessage = ' we are retriving your account';
    const logInBtn = document.querySelector('.loginbtn');
    // conect to firebase and create user with email and password
    try {
      const userCred = await this.auth.createUserWithEmailAndPassword(
        email as string,
        password as string
      );
      console.log(userCred);
      this.db.collection('users').add({
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
      });
    } catch (e) {
      console.log(e.message);
    }
    await setTimeout(() => (this.alertMessage = 'successful'), 2000);
    await setTimeout(() => (this.displayAlert = false), 4000);
  }
}
