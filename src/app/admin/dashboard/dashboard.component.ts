import { Component, OnInit } from '@angular/core';
import { CommonBridgeService } from 'src/app/services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public errorMsg       : any = '';
    public UserLoginData  : any = [];
    constructor(private common: CommonBridgeService) { 

    }

    ngOnInit(): void {
        this.common.get_session_data().subscribe(response => {
          if(response.status == "success"){
              this.UserLoginData = response.data;
          } else {
            this.UserLoginData = response.data;
            // localStorage.removeItem('loggedIn');
            // window.alert(response.data);
          }
        }, error => this.errorMsg = error )
    }
}
