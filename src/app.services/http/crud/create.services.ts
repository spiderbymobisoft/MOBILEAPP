import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { APIConfig } from '../../apiconfig/api.config';
import { Store } from '../../store/data.store';

@Injectable()
export class CreateService {

    public isLoggedin: boolean;
    public authToken: any;
    private authorization: string;
    private url: string;
    private remote: string;
    constructor(private http: Http, config: APIConfig, private store: Store) {
        config.getSavedSettings().then(settings => {
            settings['cloud'] ? this.url = config.apiConfig.remoteURL : this.url = config.apiConfig.apiURL;
            this.remote = config.apiConfig.remoteURL;
            this.authorization = config.apiConfig.authorization;
        });

    }

    addNewStreet(payload) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.authorization);
        return new Promise((resolve, reject) => {
            this.http.post(this.url + 'street', JSON.stringify(payload), { headers: headers }).subscribe(data => {
                let _data = data.json();
                if (_data.success) {
                    resolve({ success: true, data: _data.result });
                }
                else {
                    resolve({ success: false, data: _data.result });
                }
            }, err => {
                reject(err);
            });
        });
    }


    addNewProperty(payload) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.authorization);
        return new Promise((resolve, reject) => {
            this.http.post(this.url + 'property', JSON.stringify(payload), { headers: headers }).subscribe(data => {
                let _data = data.json();
                if (_data.success) {
                    resolve({ success: true, data: _data.result });
                }
                else {
                    resolve({ success: false, data: _data.result });
                }

            }, err => {
                reject(err);
            });
        });
    }


    addNewPropertyEntity(payload) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.authorization);
        return new Promise((resolve, reject) => {
            this.http.post(this.url + 'entity', JSON.stringify(payload), { headers: headers }).subscribe(data => {
                let _data = data.json();
                if (_data.success) {
                    resolve({ success: true, data: _data.result });
                }
                else {
                    resolve({ success: false, data: _data.result });
                }

            }, err => {
                reject(err);
            });
        });
    }


    publishSupportMessage(payload) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.authorization);
        return new Promise((resolve, reject) => {
            this.http.post(this.remote + 'support', JSON.stringify(payload), { headers: headers }).subscribe(data => {
                let _data = data.json();
                if (_data['success']) {
                    resolve(_data);
                }
                else {
                    resolve({ success: false, result: {} });
                }
            }, err => {
                reject(err);
            });
        });
    }

    storeUserCredentials(token, userdata) {
        localStorage.setItem('__token__', token);
        this.store.UPDATE_USER(userdata);
        localStorage.setItem('__access__', 'true');
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

}