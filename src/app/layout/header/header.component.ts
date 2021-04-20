import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public loginCheck : any = false;
    constructor(private router : Router, private auth : AuthenticationService) {
      // console.log('Header constructor called');
    }

    ngOnInit() {
      this.loginCheck = this.auth.isLoggedIn; // || JSON.parse( localStorage.getItem('loggedIn'));
    }

}
