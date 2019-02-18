import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserCreationComponent } from './user-creation/user-creation.component';

@NgModule({
  declarations: [LoginComponent, UserCreationComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
