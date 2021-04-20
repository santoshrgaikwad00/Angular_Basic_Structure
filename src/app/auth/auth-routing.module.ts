import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
   	{
       path: '',
       component: AuthComponent,
       children: [
         {
           path: '',
           redirectTo: 'login'
         },
         {
           path: 'login',
           component: LoginComponent,
         },
         {
           path: 'forgot',
           component: ForgotPasswordComponent,
         },
         {
           path: 'resetpassword/:token',
           component: ResetpasswordComponent,
         },
         {
           path: 'logout',
           component: LogoutComponent,
         }
       ]
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);
