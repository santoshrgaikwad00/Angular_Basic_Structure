import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
// import { FooterOnlyLayoutComponent } from '../layout/footer-only-layout/footer-only-layout.component';
/* 
{
    path: 'login',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
    ]
  }
*/
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
         }
       ]
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);
