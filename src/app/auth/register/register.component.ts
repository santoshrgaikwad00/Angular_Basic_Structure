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
            cpassword: ['',[Validators.required]],
        });
      }

    onSubmit(value) {
        if (value.password != value.cpassword) {
            this.errorMsg = "Password & Confirm password is not match";
            return; 
        }
        this.auth.add_user(value).subscribe(response=> {
          console.log("register response =>", response); return;
          if(response.status == "success"){
            // window.alert(response.data);
            // this.router.navigate(['/auth']);
            // this.auth.setLoggedIn(true);
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
