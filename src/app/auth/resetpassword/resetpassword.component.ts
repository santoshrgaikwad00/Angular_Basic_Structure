import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
// import { AuthenticationService, SharedService } from './../../service/index';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

    public user_token : any;
    public ResetForm: FormGroup;
    private errorMsg: any;
  
    constructor(private router: Router,
      private route: ActivatedRoute,
      private fb: FormBuilder,
      //  private authenticationService: AuthenticationService,
      // private sharedService: SharedService
      ) { 
          this.route.params.subscribe( params => {
              this.user_token = params.token;
          });
      }

    ngOnInit(): void {
        this.ResetForm = this.fb.group({
            newpassword: this.fb.control('',[Validators.required]),
            token: this.fb.control(this.user_token, [Validators.required])
        });
    }

    onSubmit(value) {
      console.log(" value => ", value);
        /* this.authenticationService.resetPassword(value)
        .subscribe(response =>
          {
            if(response.status == 200){
              this.sharedService.openSnackBar('New password is set please login', 'Success', { duration: 4000 });
              this.router.navigate(['/auth/login']);
            }
            else {
              this.sharedService.openSnackBar('New password is not set', 'Error', { duration: 4000 });
            }
          },
          error => this.errorMsg = error); */

    }

}
