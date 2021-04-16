import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { AuthenticationService, SharedService } from './../../service/index';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    public ForgotForm: FormGroup;
    private errorMsg: any;

    constructor(
        private fb: FormBuilder,
        // private authenticationService: AuthenticationService,
        // private sharedService: SharedService
      ) {
        this.ForgotForm = this.createFormGroup();
    }
  

    ngOnInit(): void {
    }

    //Declare Form Group
  createFormGroup() {
    return this.fb.group({
        email: this.fb.control('',[Validators.required])
    });
  }

  onSubmit(value) {
      console.log(" value =>", value);
    /* this.authenticationService.forgotPassword(value)
     .subscribe(response =>
       {
         if(response.status == 200){
           this.sharedService.openSnackBar('Please Check your email for further', 'Success', { duration: 4000 });
         }
         else {
           this.sharedService.openSnackBar('User not found', 'Error', { duration: 4000 });
         }
       },
       error => this.errorMsg = error); */
  }

}
