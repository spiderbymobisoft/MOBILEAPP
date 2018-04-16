import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NigeriaStatesService {

    constructor(private http: Http) {
        //var obj;
        //this.getJSON().subscribe(data => obj=data, error => console.log(error));
    }

    public getJSON(): Observable<any[]> {
        return this.http.get("./assets/json/states.json")
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