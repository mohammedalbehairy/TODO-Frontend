import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DefaultAuthComponent } from './components/default-auth/default-auth.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [ 
    LoginComponent,
    DefaultAuthComponent,
    // DefaultCoursesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
