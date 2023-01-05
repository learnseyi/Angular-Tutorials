import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabsComponent,
    InputComponent,
  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabsComponent,
    InputComponent,
  ],
})
export class SharedModule {}
