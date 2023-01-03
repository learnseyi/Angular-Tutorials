import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { StaffAuthComponent } from './staff-auth/staff-auth.component';
import { SharedModule } from '../shared/shared.module';
import {UserComponent} from './user/user.component';
import {StaffComponent} from './staff/staff.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AuthModalComponent, StaffAuthComponent,UserComponent,StaffComponent],
  exports: [AuthModalComponent, StaffAuthComponent,UserComponent,StaffComponent]
})
export class UserModule {}
