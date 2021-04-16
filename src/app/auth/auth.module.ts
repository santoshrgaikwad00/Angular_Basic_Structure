import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    AuthComponent,
  	LoginComponent,
  	ForgotPasswordComponent,
  	ResetpasswordComponent
  ],
  imports: [
  	CommonModule,
    LayoutModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
