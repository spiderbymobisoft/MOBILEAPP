import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { APIConfig } from '../../apiconfig/api.config';
import { Store } from '../../store/data.store';

@Injectable()
export class CreateService{

    public isLoggedin : boolean;
    public authToken : any;
    private appConfig : any;
    private authorization : string;
    private url : string;
    private _url : string;

    constructor(private http: Http, config : APIConfig, private store: Store) {
        this.http = http;
        this.appConfig = config.getConfig();
        this.url = this.appConfig.apiURL;
        this._url = this.appConfig.msgURL;
        this.authorization = this.appConfig.authorization;
    }

    addNewStreet(payload){
        let headers = new Headers({ 'Content-Type' : 'application/json' });
        headers.append('Authorization' , this.authorization);
        return new Promise(resolve => {
            this.http.post(this.url+'street', JSON.stringify(payload), {headers: headers}).subscribe(data => {
                let _data = data.json();
                if(_data.success){
                    resolve({success: true, data: _data.result});
                }
                else
                resolve({success: false, data: _data.result});
            },err=>{
                resolve({success: false, data: {}});
              });
        });
    }


    addNewProperty(payload){
        let headers = new Headers({ 'Content-Type' : 'application/json' });
        headers.append('Authorization' , this.authorization);
        return new Promise(resolve => {
            this.http.post(this.url+'property', JSON.stringify(payload), {headers: headers}).subscribe(data => {
                let _data = data.json();
                if(_data.success){
                    resolve({success: true, data: _data.result});
                }
                else
                resolve({success: false, data: _data.result});
            },err=>{
                resolve({success: false, data: {}});
              });
        });
    }


    addNewPropertyEntity(payload){
        let headers = new Headers({ 'Content-Type' : 'application/json' });
        headers.append('Authorization' , this.authorization);
        return new Promise(resolve => {
            this.http.post(this.url+'entity', JSON.stringify(payload), {headers: headers}).subscribe(data => {
                let _data = data.json();
                if(_data.success){
                    resolve({success: true, data: _data.result});
                }
                else
                    resolve({success: false, data: _data.result});
            },err=>{
                resolve({success: false, data: {}});
              });
        });
    }


    publishSupportMessage(payload){
        let headers = new Headers({ 'Content-Type' : 'application/json' });
        headers.append('Authorization' , this.authorization);
        return new Promise(resolve => {
            this.http.post(this._url+'post/support/message', JSON.stringify(payload), {headers: headers}).subscribe(data => {
                if(data.json().success){
                    resolve(true);
                }
                else
                    resolve(false);
            },err=>{
                resolve(false);
              });
        });
    }

    storeUserCredentials(token, userdata) {
        localStorage.setItem('__token__', token);
        this.store.UPDATE_USER(userdata);
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
    
}