import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard'; 
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SetttingComponent } from './settting/settting.component';

const routes: Routes = [
   	{
       path: '',
       component: AdminComponent,
       children: [
         {
            path: '',
            redirectTo: 'dashboard'
         },
         {
            path: 'dashboard',
            component: DashboardComponent,
            canActivate: [AuthGuard]
         },
         {
            path: 'config',
            component: ConfigurationComponent,
            canActivate: [AuthGuard]
         },
         {
            path: 'setting',
            component: SetttingComponent,
            canActivate: [AuthGuard]
         }
       ]
    }
];

export const AdminRoutingModule = RouterModule.forChild(routes);
