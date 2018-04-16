import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { APIConfig } from '../../apiconfig/api.config';

@Injectable()
export class UpdateService{

    private appConfig : any;
    private authorization : string;
    private url : string;
    private _url : string;
    private headers: Headers;
    private options: RequestOptions;
   
    constructor(private http: Http, config : APIConfig) {
        this.appConfig = config.getConfig();
        this.url = this.appConfig.apiURL;
        this._url = this.appConfig.msgURL;
        this.authorization = this.appConfig.authorization;
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                    'Accept': 'q=0.8;application/json;q=0.9'
                                });
        this.headers.append('Authorization' , this.authorization);
        this.options = new RequestOptions({ headers: this.headers });
    }


    updateUserAvatar(payload): Observable<any> {
        let body = JSON.stringify(payload);
        return this.http
            .patch(this.url+'user/avatar', body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    uploadStreetPhoto(payload): Observable<any> {
        let body = JSON.stringify(payload);
        return this.http
            .patch(this.url+'street/photo', body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    uploadPropertyPhoto(payload): Observable<any> {
        let body = JSON.stringify(payload);
        return this.http
            .patch(this.url+'property/photo', body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    uploadEntityPhoto(payload): Observable<any> {
        let body = JSON.stringify(payload);
        return this.http
            .patch(this.url+'entity/photo', body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }


    updatePlayerId(payload): Observable<any> {
        let body = JSON.stringify(payload);
        return this.http
            .patch(this.url+'user/onesignal', body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateSecurity(security): Observable<any> {
        let body = JSON.stringify(security);
        return this.http
            .patch(this.url+'user/security', body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        //console.error(errMsg);
        return Observable.throw(errMsg);
    }

}   