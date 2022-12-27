import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-staff-auth',
  templateUrl: './staff-auth.component.html',
  styleUrls: ['./staff-auth.component.css'],
})
export class StaffAuthComponent implements OnInit {
  modalID = 'staff';
  constructor(public modal: ModalService) {}

  ngOnInit() {
    this.modal.register(this.modalID);
  }
}
