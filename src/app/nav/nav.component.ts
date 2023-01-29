import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isLoggedIn = false;

  constructor(public modal: ModalService) {}

  userState() {
    return !this.isLoggedIn ? 'Login' : 'Sign Out';
  }

  ngOnInit() {}
}
