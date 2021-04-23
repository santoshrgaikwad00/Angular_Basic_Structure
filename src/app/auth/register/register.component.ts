import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from '../../services/index';

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
        });
      }

    onSubmit(value) {
        console.log(value); return;
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
