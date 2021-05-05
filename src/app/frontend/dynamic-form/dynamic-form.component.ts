import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges, DoCheck {
    @Input() fields : any = [];
    dynamicForm: FormGroup;

    constructor( private fb: FormBuilder ) { }

    ngOnChanges(changes : SimpleChanges){
      
    }

    ngOnInit(): void {
        // console.log(" docheck fields =>> ", this.fields);
        console.log(" fields =>>", this.fields);
        const controls = {}; 
          this.fields.forEach(res => {
            const validationsArray = [];
            res.validations.forEach(val => {
              if (val.name === 'required') {
                validationsArray.push(
                  Validators.required
                );
              }
              if (val.name === 'pattern') {
                validationsArray.push(
                  Validators.pattern(val.validator)
                );
              }
            });           
            controls[res.name] = new FormControl(res.value, validationsArray);
          });
          console.log(" controls =>>", controls);
          
          this.dynamicForm = new FormGroup(
            controls
          );
    }
    /* ngOnInit(): void {
        // console.log(" docheck fields =>> ", this.fields);
        console.log(" fields =>>", this.fields);
        const controls = {}; 
          this.fields.forEach(res => {
            const validationsArray = [];
            res.validations.forEach(val => {
              if (val.name === 'required') {
                validationsArray.push(
                  Validators.required
                );
              }
              if (val.name === 'pattern') {
                validationsArray.push(
                  Validators.pattern(val.validator)
                );
              }
            });
            controls[res.name] = new FormControl(res.value, validationsArray);
          });
          console.log(" controls =>>", controls);
          
          this.dynamicForm = new FormGroup(
            controls
          );
    } */
    ngDoCheck(){
      this.dynamicForm.addControl('field_validation', new FormControl(''));
    }

    onSubmit() {
        console.log(this.dynamicForm.value);
    }
}
