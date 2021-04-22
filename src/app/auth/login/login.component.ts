import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from '../../services/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public UserLoginForm: FormGroup;
    public errorMsg: any;
    private returnUrl: string;
    
    // constructor() { }
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private auth: AuthenticationService,
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
            // email: this.fb.control('',[Validators.required]), // SAME WORK AS BELOW FEILD
            // password: this.fb.control('',[Validators.required]), // SAME WORK AS BELOW FEILD
            email: ['',[Validators.required]],
            password: ['',[Validators.required]],
        });
      }

    onSubmit(value) {
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';
        this.auth.get_logged_in(value).subscribe(response=> {
          if(response.status == "success"){
            // window.alert(response.data);
            this.router.navigate(['/admin']);
            this.auth.setLoggedIn(true);
          } else {
            this.errorMsg = response.data;
          }
        },  error => this.errorMsg = error ) ;
        

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
