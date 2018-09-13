import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { VerifyEmailModel } from '../model/verify.email.model';
import { AppVersion } from '../model/appversion.model';
import { APIConfig } from '../../apiconfig/api.config';

@Injectable()
export class RetrieveService {

  private authorization: string;
  private url: string;
  private remote: string;
  private limit: number = 50;

  constructor(private http: Http, config: APIConfig) {
    config.getSavedSettings().then(settings => {
      settings['cloud'] ? this.url = config.apiConfig.remoteURL : this.url = config.apiConfig.apiURL;
      this.remote = config.apiConfig.remoteURL;
      this.authorization = config.apiConfig.authorization;
    });

  }

  getCurrentAppVersion(): Observable<AppVersion> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let app: string = "FemaleHire";
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.remote + 'current/version/' + app, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  verifyUser(email): Observable<VerifyEmailModel> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.remote + 'verify/user/' + email, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getStreetRecords(start): Observable<any> {
    console.log()
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'streets/' + start + '/' + this.limit, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getStreetRecordsByUser(userId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'user/streets/' + userId, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  getPropertyRecordsByStreet(streetId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'street/properties/' + streetId, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  searchStreetRecords(search, start): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'search/streets/' + search + '/' + start + '/' + this.limit, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  getStreetRecordsByGIS(gisId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'gis/street/' + gisId, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPropertyRecords(start): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'properties/' + start + '/' + this.limit, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEntityRecords(propertyId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'property/entities/' + propertyId, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  getNotifications(userId, start): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + `notifications/${userId}/${start}/${this.limit}`, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  getBroadcastNotifications(userId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + `broadcast/notifications/${userId}`, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  getUserBSN(userId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', this.authorization);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + `bsn/user/${userId}`, options)
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