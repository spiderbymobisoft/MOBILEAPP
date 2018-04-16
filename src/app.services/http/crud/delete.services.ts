import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { APIConfig } from '../../apiconfig/api.config';
import { Events } from 'ionic-angular/util/events';

@Injectable()
export class DeleteService{

    private appConfig : any;
    private authorization : string;
    private url : string;
    private headers: Headers;
    private options: RequestOptions;
   
    constructor(public http: Http, public config : APIConfig, private events: Events) {
        this.appConfig = config.getConfig();
        this.url = this.appConfig.apiURL;
        this.authorization = this.appConfig.authorization;
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                    'Accept': 'q=0.8;application/json;q=0.9'
                                });
        this.options = new RequestOptions({ headers: this.headers });
    }
    
    removeStreetRecord(streetId): Observable<any> {
        return this.http
            .delete(this.url+'street/'+streetId, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    } 

    removePropertyRecord(propertyId): Observable<any> {
        return this.http
            .delete(this.url+'street/'+propertyId, this.options)
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
        this.events.publish('networkError','Network Error! Check your internet connection and try again');
        return Observable.throw(errMsg);
    }
}   