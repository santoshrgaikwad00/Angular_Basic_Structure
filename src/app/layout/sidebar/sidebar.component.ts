import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    public loginCheck : any = false;

    constructor(private router : Router, private auth : AuthenticationService) {
      // console.log('Sidebar constructor called');
    }

    ngOnInit() {
        this.loginCheck = this.auth.isLoggedIn;        
    }

}
