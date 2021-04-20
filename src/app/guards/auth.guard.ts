import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/index';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor( private auth : AuthenticationService, 
                 private router : Router ){

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // debugger
        if(!this.auth.isLoggedIn){
            this.router.navigate(['auth/login']);
        }
        return this.auth.isLoggedIn;

        /*
        // *
        // * Check on server for session is se or not 
        // * 
               
        if(this.auth.isLoggedIn){
            return this.auth.isLoggedIn;
        }

        this.auth.chk_is_logged_in().pipe( map( res=> {
            console.log(" chk_is_logged_in hitss =>>", res);
            if (res.status == 'success') {
                this.auth.setLoggedIn(true);
                return true;
            } else {
                this.router.navigate(['auth']);
                return false;
            }            
        })); */

        // this.router.navigate(['auth/login']);
    }
  
}
