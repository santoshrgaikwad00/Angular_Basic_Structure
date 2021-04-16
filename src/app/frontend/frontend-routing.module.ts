import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './../guards/auth.guard';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
   	{
       path: '',
       component: FrontendComponent,
       children: [
         {
           path: '',
           redirectTo: 'home'
         },
         {
           path: 'home',
           component: HomeComponent,
            // canActivate: [AuthGuard]
         },
         {
           path: 'about',
           component: AboutComponent,
            // canActivate: [AuthGuard]
         },
        //  {
        //    path: 'forms/:id',
        //    component: FormsComponent,
        //    canActivate: [AuthGuard]
        //  }
       ]
    }
];

export const FrontendRoutingModule = RouterModule.forChild(routes);
