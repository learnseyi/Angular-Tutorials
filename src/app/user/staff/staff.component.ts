import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  displayAlert: boolean = false;
  alertMessage: string = 'I am test';
  alertClassName: string = 'success';
  name = new FormControl('', [Validators.required, Validators.minLength(5)]);
  department = new FormControl('');
  password = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),
    Validators.minLength(8),
  ]);
  // [control]="name"
  // type="text"
  // placeholder="Enter Username"

  // constructor
  constructor() {}
  ngOnInit() {}
  staffLoginForm = new FormGroup({
    name: this.name,
    department: this.department,
    password: this.password,
  });
  async login(e) {
    e.preventDefault();
    this.displayAlert = !this.displayAlert;
    this.alertMessage = ' we are retriving your account';
    const logInBtn = document.querySelector('.loginbtn');
    await setTimeout(() => (this.alertMessage = 'successful'), 2000);
    await setTimeout(() => (this.displayAlert = false), 4000);
    console.log('Staff I was clicked');
  }
}
