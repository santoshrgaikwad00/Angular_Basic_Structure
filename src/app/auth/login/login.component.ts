import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
// import { AuthenticationService, SharedService } from './../../service/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public UserLoginForm: FormGroup;
    private errorMsg: any;
    private returnUrl: string;
    
    // constructor() { }
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        // private authenticationService: AuthenticationService,
        // private sharedService: SharedService
        ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //   this.router.navigate(['/']);
        // }
        this.UserLoginForm = this.createFormGroup();
    }

    ngOnInit(): void {

    }

    //Declare Form Group
    createFormGroup() {
        return this.fb.group({
            username: this.fb.control('',[Validators.required]),
            password: this.fb.control('',[Validators.required]),
        });
      }

    onSubmit(value) {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';
        console.log("value => ", value);
        /* this.authenticationService.Login(value)
        .subscribe(response =>
          {
            if(response.status == 200){
              this.sharedService.openSnackBar('Logged in successfully !', 'Success', { duration: 4000 });
              this.router.navigate([this.returnUrl]);
            }
            else {
              this.sharedService.openSnackBar('Invalid Username/Password', 'Error', { duration: 4000 });
            }
          },
          error => this.errorMsg = error); */
    }
}
