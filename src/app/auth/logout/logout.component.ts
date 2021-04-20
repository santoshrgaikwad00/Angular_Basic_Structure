import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';
// import { AuthenticationService } from '../../services/index';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth : AuthenticationService,
              private router : Router  ) { }

  ngOnInit(): void {
    this.auth.setLoggedIn(false);
    this.router.navigate(['/admin']);
  }

}
