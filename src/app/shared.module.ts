import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


const modules = [
  	
];

@NgModule({
 imports: [
 	CommonModule,
    // BrowserAnimationsModule,
 	FormsModule,
 	ReactiveFormsModule,
    ToastrModule.forRoot(),
 ],
 declarations: [
 	...modules,
 ],
 exports: [
 	CommonModule,
 	FormsModule,
 	ReactiveFormsModule,
    ...modules
 ],
 entryComponents: [
    ...modules
  ]
})
export class SharedModule { }