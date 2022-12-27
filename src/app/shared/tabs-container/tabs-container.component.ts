import { Component, OnInit,Input } from '@angular/core';
import {ModalComponent} from '../modal/modal.component'


@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit {
  
@Input() modalID = '';
  constructor() { 
    console.log('I am tab container', this.modalID)
  }

  ngOnInit() {
  }

}