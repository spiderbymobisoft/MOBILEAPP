import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RetrieveService } from '../../app.services/http/crud/retrieve.services';
import { SharedServices } from '../../app.services/library/shared.services';

@IonicPage()
@Component({
  selector: 'page-street-properties',
  templateUrl: 'street-properties.html',
})
export class StreetPropertiesPage {

  public propertyRecords: any[] = [];
  public isBlankPost: number = 0;
  private networkErrorText: string = '';
  private streetId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private rs: RetrieveService, private ss: SharedServices) {
      this.streetId = navParams.get('data');
  }

  ionViewDidLoad() {
    this.getPropertyRecords()
  }

  ionViewWillEnter() {
    
  }

  getPropertyRecords() {
      this.rs.getPropertyRecordsByStreet(this.streetId).subscribe(data => {
        let _data = data;
        if (_data.result.length > 0) {
          this.propertyRecords =  _data.result;
          this.isBlankPost = 1;
        } else {
          this.isBlankPost = 1;
        }
      }, err => {
        this.networkErrorText = 'Network Error. Check your internet connection and try again';
        this.ss.toast(this.networkErrorText, 2000);
        this.propertyRecords ? this.isBlankPost = 0 : this.isBlankPost = 1;
      });
  }

  showThisRecord(propertyRecord){
    this.navCtrl.push('PropertyPage', {data: propertyRecord})
  }
}
