import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { APIConfig } from '../../apiconfig/api.config';
import { Store } from '../../store/data.store';

@Injectable()
export class AuthenticationService{
    public isLoggedin : boolean;
    public authToken : any;
    private appConfig : any;
    private authorization : string;
    private url : string;
   
    constructor(public http: Http, config : APIConfig, private store: Store) {
        this.isLoggedin = false;
        this.authToken = null;
        this.appConfig = config.getConfig();
        this.url = this.appConfig.apiURL;
        this.authorization = this.appConfig.authorization;
    }
    
    storeUserCredentials(token, userdata) {
        this.store.UPDATE_USER(userdata);
        localStorage.setItem('__token__', token);
        localStorage.setItem('__access__','true');
        this.useCredentials(token); 
    }
    
    useCredentials(token) {
        this.isLoggedin = true;
        this.authToken = token;
    }
    
    loadUserCredentials() {
        var token = localStorage.getItem('__token__');
        this.useCredentials(token);
    }
    
    destroyUserCredentials() {
        this.isLoggedin = false;
        this.authToken = null;
        /* localStorage.removeItem('__user__');
        localStorage.removeItem('__token__');
        localStorage.removeItem('__remembrance__');
        localStorage.removeItem('__email__');
        localStorage.removeItem('__password__'); */
        localStorage.clear();
    }
    
    authenticate(user) {
        var creds = JSON.stringify(user);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization' , this.authorization);
        return new Promise((resolve, reject)=> {
            this.http.post(this.url+'authenticate', creds, {headers: headers}).subscribe(data => {
                let _data = data.json();
                if(_data.success){
                    this.storeUserCredentials(_data.token, _data.result);
                    resolve(true);
                }
                else
                    resolve(false);
            },err=>{
                 resolve(false);
              });
        });
    }

    isAuthenticated() : boolean{
        const access = localStorage.getItem('__access__');
        if(access === 'true')
            return true;
        return false;
    }
    
    logout() {
        return new Promise((resolve, reject)=>{
            this.destroyUserCredentials();
            resolve(true);
        });
    }
}