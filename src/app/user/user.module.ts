import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { StaffComponent } from './staff/staff.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [AuthModalComponent, UsersComponent, StaffComponent,RegisterComponent],
  exports: [AuthModalComponent, UsersComponent, StaffComponent],
})
export class UserModule {}
