import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services';
// import { AuthenticationService } from '../../services/index';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth : AuthenticationService,
              private router : Router,
              private toastr : ToastrService  ) { }

  ngOnInit(): void {
      this.auth.get_logged_out().subscribe(response =>{
        if (response.status == 'success') {
            this.auth.setLoggedIn(false);
            localStorage.removeItem('loggedIn');
            this.toastr.success('Logout successfully !!', 'success!');
            this.router.navigate(['/home']);
        } else {
            window.alert(response.data);
        }
      });
  }

}
