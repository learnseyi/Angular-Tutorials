import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit {
   modalID = 'auth';

  constructor(public modal: ModalService) {}

  ngOnInit() {
    this.modal.register(this.modalID);
  }
}
