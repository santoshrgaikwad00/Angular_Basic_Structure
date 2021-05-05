import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import {LayoutModule} from '../layout/layout.module';
import { AboutComponent } from './about/about.component';
import { FormsComponent } from './forms/forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    FrontendRoutingModule,   
  ],
  declarations: [
  	FrontendComponent,
  	HomeComponent,
    AboutComponent,
    FormsComponent,
    DynamicFormComponent,
  	
  ]
})
export class FrontendModule { }
