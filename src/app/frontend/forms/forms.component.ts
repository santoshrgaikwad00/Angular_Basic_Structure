import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
    fields : any = [];
    dynamicForm: FormGroup;
    
   

    constructor( private fb: FormBuilder ) { }

    ngOnInit(): void {
      this.dynamicForm = new FormGroup({});
    }

    addFields(inputs:String){
        let control = {};       
        if(inputs == "Text"){
          control = { type: 'text',
                      name: 'firstName',
                      label: 'First Name',
                      value: '',
                      validations: [
                        {
                          name: "required",
                          validator: "required",
                          message: "firstName Required"
                        }
                      ]
                    };
        }
        if(inputs == "Checkbox"){
          control = { type: 'checkboxs',
                      name: 'hobby',
                      label: 'Hobby',
                      validations: [                        
                      ],
                      options: [
                        { key: 'f', label: 'Fishing' },
                        { key: 'c', label: 'Cooking' }
                      ]
                    };
        }
        if(inputs == "Select"){
          control = { type: 'select',
                      name: 'country',
                      label: 'Country',
                      value: '',
                      validations: [
                        {
                          name: "required",
                          validator: "required",
                          message: "11 country Required"
                        }
                      ],
                      options: [
                        { val: 'india', label: 'India' },
                        { val: 'USA', label: 'USA' }
                      ]
                    };
        }
        if(inputs == "Radio"){
          control = { type: 'radio',
                      name: 'country',
                      label: 'Country',
                      value: 'in',
                      validations: [
                        {
                          name: "required",
                          validator: "required",
                          message: "country Required"
                        }
                      ],
                      options: [
                        { key: 'm', label: 'Male' },
                        { key: 'f', label: 'Female' }
                      ]
                    };
        }
        if(inputs == "Textarea"){
          control = { type: 'textarea',
                      name: 'address',
                      label: 'Address',
                      value: '',
                      validations: [
                        {
                          name: "required",
                          validator: "required",
                          message: "Address Required"
                        }
                      ]
                    };
        }
        this.fields.push(control);

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

    
    onSubmit() {
        console.log(this.dynamicForm.value);
    }
}
