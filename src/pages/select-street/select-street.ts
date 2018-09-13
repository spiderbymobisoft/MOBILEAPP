import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RetrieveService } from '../../app.services/http/crud/retrieve.services';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';

@IonicPage()
@Component({
  selector: 'page-select-street',
  templateUrl: 'select-street.html',
})
export class SelectStreetPage {

  public streetRecords: any[] = [];
  public user: any;
  public isBlankPost: number = 0;
  public searchText: string = '';
  private networkErrorText: string = '';
  private start: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private rs: RetrieveService, private store: Store, private ss: SharedServices) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.dataInit();
  }

  dataInit() {
    this.user = this.store.GET_USER();
    setTimeout(() => {
      this.loadContent();
    }, 500);
  }

  loadContent() {
    this.getStreetRecords().then(res => {
      if (!res) {
        this.isBlankPost = 1;
        setTimeout(() => {
          this.networkErrorText = '';
        }, 3100);
      }
    });
  }

  search() {
    if(this.searchText === ''){
      this.ss.toast('Please enter street name to search', 2000);
    }else{
      this.ss.presentLoading();
      this.start = 0;
      this.streetRecords = [];
      this.searchStreetRecords().then(res => {
        this.ss.dismissLoading();
        if (!res) {
          this.isBlankPost = 1;
          setTimeout(() => {
            this.networkErrorText = '';
          }, 3100);
        }
      });
    }
  }

  searchStreetRecords() {
    return new Promise(resolve => {
      this.rs.searchStreetRecords(this.searchText,this.start).subscribe(data => {
        let _data = data;
        if (_data.result.length > 0) {
          this.streetRecords = [...this.streetRecords, ..._data.result];
          this.isBlankPost = 1;
          resolve(true);
        } else {
          this.isBlankPost = 1
          resolve(false);
        }
      }, err => {
        this.networkErrorText = 'Network Error. Check your internet connection and try again';
        this.streetRecords ? this.isBlankPost = 0 : this.isBlankPost = 1;
        resolve(false);
      });
    }).catch((err) => {
      this.streetRecords.length > 0 ? this.isBlankPost = 0 : this.isBlankPost = 1;
      this.ss.toast('Unable to perform this operation. Please try again', 2000);
    });
  }


  getStreetRecords() {
    return new Promise(resolve => {
      this.start = 0;
      this.rs.getStreetRecordsByUser(this.user._id).subscribe(data => {
        let _data = data;
        if (_data.result.length > 0) {
          this.streetRecords = _data.result;
          this.isBlankPost = 1;
          resolve(true);
        } else {
          this.isBlankPost = 1
          resolve(false);
        }
      }, err => {
        this.networkErrorText = 'Network Error. Check your internet connection and try again';
        this.streetRecords ? this.isBlankPost = 0 : this.isBlankPost = 1;
        resolve(false);
      });
    }).catch((err) => {
      this.streetRecords.length > 0 ? this.isBlankPost = 0 : this.isBlankPost = 1;
      this.ss.toast('Unable to perform this operation. Please try again', 2000);
    });
  }


  doInfinite(infiniteScroll: any) {
    this.start += 50;
    this.searchStreetRecords().then(() => {
      infiniteScroll.complete();
    }).catch(err => {
      this.ss.toast('No network connection...', 2000);
    });
  }

  openNewPropertyPage(streetRecord){
    let payload: any = {
      street_id: streetRecord.street.street_id,
      street_name: streetRecord.street.street_name,
      lga: streetRecord.street.lga,
      state: streetRecord.street.state,
      country: streetRecord.street.country
    };
    this.navCtrl.push('NewPropertyPage', {data: payload})
  }
}
