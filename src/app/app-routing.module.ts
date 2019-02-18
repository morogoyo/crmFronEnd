import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { UserCreationComponent } from './admin/user-creation/user-creation.component';
import { ClientCreationComponent } from './client/client-creation/client-creation.component';

const routes: Routes = [
  {path: 'admin/login', component: LoginComponent},
  {path: 'admin/user-creation', component: UserCreationComponent},
  {path: 'client/client-creation' , component: ClientCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
