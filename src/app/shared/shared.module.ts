import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent,TabsContainerComponent,TabsComponent],
  exports: [ModalComponent,TabsContainerComponent,TabsComponent],
})
export class SharedModule {}
