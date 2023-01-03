import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { StaffAuthComponent } from './staff-auth/staff-auth.component';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { StaffComponent } from './staff/staff.component';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [
    AuthModalComponent,
    StaffAuthComponent,
    UsersComponent,
    StaffComponent
  ],
  exports: [
    AuthModalComponent,
    StaffAuthComponent,
    UsersComponent,
    StaffComponent,
  ],
})
export class UserModule {}
