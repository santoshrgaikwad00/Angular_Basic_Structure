import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import {LayoutModule} from '../layout/layout.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FrontendRoutingModule,   
  ],
  declarations: [
  	FrontendComponent,
  	HomeComponent,
   AboutComponent,
  	
  ]
})
export class FrontendModule { }
