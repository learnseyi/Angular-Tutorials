import { Component, OnInit,Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit {
   modalID = 'auth';
   @Input() active;

  constructor(public modal: ModalService) {}

  ngOnInit() {
    this.modal.register(this.modalID);
  }
}
