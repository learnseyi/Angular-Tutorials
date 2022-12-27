import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { StaffAuthComponent } from './staff-auth/staff-auth.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AuthModalComponent, StaffAuthComponent],
  exports: [AuthModalComponent, StaffAuthComponent],
})
export class UserModule {}
