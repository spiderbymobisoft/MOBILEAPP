import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { PropertyOfflinePage } from '../property-offline/property.offline';

@IonicPage()
@Component({
  selector: 'page-street-properties-offline',
  templateUrl: 'street.properties.offline.html',
})
export class StreetPropertiesOfflinePage {

  public propertyRecords: any[] = [];
  public isBlankPost: number = 0;
  private streetId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: Store) {
      this.streetId = navParams.get('data');
  }

  ionViewDidLoad() {
    this.getPropertyRecords()
  }

  ionViewWillEnter() {
    
  }

  getPropertyRecords() {
    this.propertyRecords = this.store.GET_STREET_PROPERTIES(this.streetId);
    this.propertyRecords.length == 0 ? this.isBlankPost = 1 : this.isBlankPost = 0;
  }

  showThisRecord(propertyRecord){
    this.navCtrl.push(PropertyOfflinePage, {data: propertyRecord})
  }
}
