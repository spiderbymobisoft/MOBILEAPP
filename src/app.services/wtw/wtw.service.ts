import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class WhatThreeWordsService {


  constructor(private http: Http) { 
    
  }
  
  getWhatThreeWords(coordinates) : Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers : headers });
        return this.http.get(`https://api.what3words.com/v2/reverse?coords=${coordinates.latitude},${coordinates.longitude}&display=minimal&format=json&key=EVFEUB3R`, options)
        .map(this.extractData)
        .catch(this.handleError);
    }

  
  private extractData(res: Response) {
    let body;
    if (res.text()) {
        body = res.json();
    }
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //console.error(errMsg);
    return Observable.throw(errMsg);
    }
}