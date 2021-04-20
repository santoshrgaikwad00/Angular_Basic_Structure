import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface sessionData {
    status : string,
    data : any,
};

@Injectable({
    providedIn: 'root'
})
export class CommonBridgeService {
    private API_URL = "http://localhost/";
    
    constructor(private http: HttpClient) { }

    get_session_data(){
      return this.http.get<sessionData>(this.API_URL+"php_api/auth.php?action=database");
    }


}
