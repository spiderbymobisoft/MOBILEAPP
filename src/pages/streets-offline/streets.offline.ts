import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { NewStreetPage } from '../new-street/new-street';
import { StreetOfflinePage } from '../street-offline/street.offline';

@IonicPage()
@Component({
  selector: 'page-streets-offline',
  templateUrl: 'streets.offline.html',
})
export class StreetsOfflinePage {

  public streetRecords: any[] = [];
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
    this.streetRecords = this.store.GET_RECORD('__streets__');
    this.streetRecords.length == 0 ? this.isBlankPost = 1 : this.isBlankPost = 0;
  }


  doRefresh(refresher) {
    this.loadContent();
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }



  add() {
    this.navCtrl.push(NewStreetPage);
  }

  showThisRecord(streetRecord) {
    this.navCtrl.push(StreetOfflinePage, { data: streetRecord })
  }

}
