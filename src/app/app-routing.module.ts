import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './userlogin/login/login.component';
import { ReactformComponent } from './userlogin/reactform/reactform.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  {
    component: FormsComponent,
    path: 'forms',
    children: [
      { component: LoginComponent, path: 'loginform' },
      { component: ReactformComponent, path: 'reactform' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
