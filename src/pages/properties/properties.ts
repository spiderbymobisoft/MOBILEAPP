import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RetrieveService } from '../../app.services/http/crud/retrieve.services';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { PropertyPage } from '../property/property';
import { SelectStreetPage } from '../select-street/select-street';



@IonicPage()
@Component({
  selector: 'page-properties',
  templateUrl: 'properties.html',
})
export class PropertiesPage {

  public propertyRecords: any[] = [];
  public user: any;
  public isBlankPost: number = 0;
  private networkErrorText: string = '';
  private start: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private rs: RetrieveService, private store: Store, private ss: SharedServices) {
  }

  ionViewDidLoad() {
    this.dataInit();
  }

  ionViewWillEnter() {
  }

  dataInit() {
    this.user = this.store.GET_USER();
    setTimeout(() => {
      this.loadContent();
    }, 500);
  }

  loadContent() {
    this.getPropertyRecords().then(res => {
      if (!res) {
        this.isBlankPost = 1;
        setTimeout(() => {
          this.networkErrorText = '';
        }, 3100);
      }
    });
  }


  pullgetPropertyRecords() {
    return new Promise(resolve => {
      this.isBlankPost = 0;
      this.start = 0;
      this.rs.getPropertyRecords(this.start).subscribe(data => {
        let _data = data;
        _data = data;
        if (_data.result.length > 0) {
          this.propertyRecords = _data.result;
          this.isBlankPost = 1;
          resolve(true);
        } else {
          resolve(false);
          this.isBlankPost = 1
        }
      }, err => {
        this.networkErrorText = 'Network Error. Check your internet connection and try again';
        this.propertyRecords.length > 0 ? this.isBlankPost = 0 : this.isBlankPost = 1;
        resolve(false);
        setTimeout(() => {
          this.networkErrorText = '';
        }, 3100);
      });


    }).catch((err) => {
      this.ss.toast('Unable to perform this operation. Please try again', 3000);
    });
  }

  getPropertyRecords() {
    return new Promise(resolve => {
      this.rs.getPropertyRecords(this.start).subscribe(data => {
        let _data = data;
        if (_data.result.length > 0) {
          this.propertyRecords =  _data.result;
          this.isBlankPost = 1;
          resolve(true);
        } else {
          this.isBlankPost = 1
          resolve(false);
        }
      }, err => {
        this.networkErrorText = 'Network Error. Check your internet connection and try again';
        this.ss.toast(this.networkErrorText, 2000);
        this.propertyRecords ? this.isBlankPost = 0 : this.isBlankPost = 1;
        resolve(false);
      });
    }).catch((err) => {
      this.propertyRecords.length > 0 ? this.isBlankPost = 0 : this.isBlankPost = 1;
      this.ss.toast('Unable to perform this operation. Please try again', 2000);
    });
  }

  getMorePropertyRecords() {
    return new Promise(resolve => {
      this.rs.getPropertyRecords(this.start).subscribe(data => {
        let _data = data;
        if (_data.result.length > 0) {
          this.propertyRecords = [...this.propertyRecords, ..._data.result];
          this.isBlankPost = 1;
          resolve(true);
        } else {
          this.isBlankPost = 1
          resolve(false);
        }
      }, err => {
        this.networkErrorText = 'Network Error. Check your internet connection and try again';
        this.ss.toast(this.networkErrorText, 2000);
        this.propertyRecords ? this.isBlankPost = 0 : this.isBlankPost = 1;
        resolve(false);
      });
    }).catch((err) => {
      this.propertyRecords.length > 0 ? this.isBlankPost = 0 : this.isBlankPost = 1;
      this.ss.toast('Unable to perform this operation. Please try again', 2000);
    });
  }


  doRefresh(refresher) {
    this.pullgetPropertyRecords().then((res) => {
      if (!res) {
        setTimeout(() => {
          this.networkErrorText = '';
        }, 3100);
      }
    });
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }

  doInfinite(infiniteScroll: any) {
    this.start += 50;
    this.getMorePropertyRecords().then(() => {
      infiniteScroll.complete();
    }).catch(err => {
      this.ss.toast('No network connection...', 2000);
    });
  }

  add() {
    this.navCtrl.push(SelectStreetPage);
  }

  showThisRecord(propertyRecord){
    this.navCtrl.push(PropertyPage, {data: propertyRecord, sender: 'online'});
  }
}
