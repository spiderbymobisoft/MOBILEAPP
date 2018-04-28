import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectStreetPage } from '../select-street/select-street';
import { PropertyOfflinePage } from '../property-offline/property.offline';
import { Store } from '../../app.services/store/data.store';



@IonicPage()
@Component({
  selector: 'page-properties-offline',
  templateUrl: 'properties.offline.html',
})
export class PropertiesOfflinePage {

  public propertyRecords: any[] = [];
  public user: any;
  public isBlankPost: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store) {
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
   this.propertyRecords = this.store.GET_RECORD('__properties__');
   this.propertyRecords.length == 0 ? this.isBlankPost = 1 : this.isBlankPost = 0;
  }



  doRefresh(refresher) {
    this.loadContent();
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }



  add() {
    this.navCtrl.push(SelectStreetPage);
  }

  showThisRecord(propertyRecord){
    this.navCtrl.push(PropertyOfflinePage, {data: propertyRecord});
  }
}
