import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
//import 'rxjs/Rx';  // use this line if you want to be lazy, otherwise:
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

@Injectable()
export class VerificationService {

  constructor(private http: Http) { 
    
  }
  
  verifyEmail(email): Observable<any> {
    return this.http.get(`https://trumail.io/json/${email}`)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body;
    // check if empty, before call json
    if (res.text()) {
        body = res.json();
    }
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
}