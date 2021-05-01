import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from '../../services/index';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public UserRegisterForm: FormGroup;
    public errorMsg: any;
    private returnUrl: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private auth: AuthenticationService,
        private toastr: ToastrService,
        // private sharedService: SharedService
        ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //   this.router.navigate(['/']);
        // }
        this.UserRegisterForm = this.createFormGroup();
    }

    ngOnInit(): void {
    }

    //Declare Form Group
    createFormGroup() {
        return this.fb.group({
            // email: this.fb.control('',[Validators.required]), // SAME WORK AS BELOW FEILD
            // password: this.fb.control('',[Validators.required]), // SAME WORK AS BELOW FEILD
            firstname: ['',[Validators.required]],
            lastname: ['',[Validators.required]],
            email: ['',[Validators.required]],
            password: ['',[Validators.required]],
            cpassword: ['',[Validators.required]],
        });
      }

    onSubmit(value) {
        if (value.password != value.cpassword) {
            this.errorMsg = "Password & Confirm password is not match";
            return; 
        }
        const formData = new FormData();
        formData.append('firstname', value.firstname);
        formData.append('lastname', value.lastname);
        formData.append('email', value.email);
        formData.append('password', value.password);

        this.auth.add_user(formData).subscribe(response=> {
          // console.log("register response =>", response); return;
          if(response.status == "success"){
            console.log("success 11");
            this.UserRegisterForm.reset();
            this.toastr.success('Hello world!', 'Toastr fun!');
          } else {
            this.errorMsg = response.data;
          }
        },  error => this.errorMsg = error );
    }

    
}
