import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

interface loginData {
    status : string,
    data : string
};

interface chk_is_logged_in {
    status : string,
    data : any
};

interface logoutStatus {
    status : string,
    data : string
}

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private API_URL = "http://localhost/";
    private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false'); // false; // 

    constructor(private http: HttpClient) { }

    setLoggedIn(value: boolean){
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', value.toString());
    }

    get isLoggedIn() {
        return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString() ); // this.loggedInStatus; //
    }

    // GET'S LOGIN AND START SESSION....
    get_logged_in(request){
        return this.http.post<loginData>(this.API_URL+"php_api/auth.php?action=login", {
            email : request.email,
            password : request.password
        });
    }

    // CHECK SESSION IS STILL AVAILABEL....
    chk_is_logged_in() : Observable<chk_is_logged_in>{
        return this.http.get<chk_is_logged_in>(this.API_URL+"php_api/auth.php?action=isLoggedIn");
    }

    // GET'S LOGOUT AND DISTROY SESSION....
    get_logged_out(){
        return this.http.get<logoutStatus>(this.API_URL+"php_api/auth.php?action=logout");
    }
}
