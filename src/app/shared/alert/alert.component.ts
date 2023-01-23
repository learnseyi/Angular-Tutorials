import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() display ;
  @Input() message = ' ';
  @Input() className = 'success';

  closeBtn() {
    this.display = !this.display;
  }

  constructor() {}

  ngOnInit() {}
}
