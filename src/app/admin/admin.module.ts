import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {LayoutModule} from '../layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SetttingComponent } from './settting/settting.component';



@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    AdminRoutingModule,   
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    ConfigurationComponent,
    SetttingComponent,
  	
  	
  ]
})
export class AdminModule { }
