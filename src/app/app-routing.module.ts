

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
     	path : '',
     	loadChildren: () => import('src/app/frontend/frontend.module').then(m => m.FrontendModule)
 	},
	{
		path : 'auth',
		loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
	},
	{
		path : 'admin',
		loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
	},
 	// {
 	// 	path: '**',
 	// 	component: PageNotFoundComponent
 	// }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }