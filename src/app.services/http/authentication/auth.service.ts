import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { APIConfig } from '../../apiconfig/api.config';
import { Store } from '../../store/data.store';
import { BSNStore } from '../../store/bsn.store';

@Injectable()
export class AuthenticationService {
    public isLoggedin: boolean;
    public authToken: any;
    private authorization: string;
    private remote: string;

    constructor(public http: Http, config: APIConfig, private store: Store, private bsn: BSNStore) {
        this.isLoggedin = false;
        this.authToken = null;
        this.remote = config.apiConfig.remoteURL;
        this.authorization = config.apiConfig.authorization;
    }

    storeUserCredentials(token, userdata) {
        this.store.UPDATE_USER(userdata).then(data => {
            localStorage.setItem('__token__', token);
            localStorage.setItem('__access__', 'true');
            this.useCredentials(token);
        });
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
        localStorage.clear();
    }

    authenticate(user) {
        var creds = JSON.stringify(user);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authorization);
        return new Promise((resolve, reject) => {
            this.http.post(this.remote + 'authenticate/mobile', creds, { headers: headers }).subscribe(data => {
                let _data = data.json();
                if (_data.success) {
                    this.storeUserCredentials(_data.token, _data.result);
                    this.bsn.INIT(_data.result._id);
                    resolve(_data);
                }
                else{
                    resolve({success: false});
                }
            }, err => {
                reject(err);
            });
        });
    }

    isAuthenticated(): boolean {
        const access = localStorage.getItem('__access__');
        if (access === 'true')
            return true;
        return false;
    }

    logout() {
        return new Promise((resolve, reject) => {
            this.destroyUserCredentials();
            resolve(true);
        });
    }
}