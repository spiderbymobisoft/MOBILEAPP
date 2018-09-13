import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';

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
    this.store.GET_USER().then(data=>{
      this.user = data;
      setTimeout(() => {
        this.loadContent();
      }, 500);
    });
    
  }

  loadContent() {
    this.store.GET_RECORD('__streets__').then(data=>{
      this.streetRecords = data || [];
      this.streetRecords.length == 0 ? this.isBlankPost = 1 : this.isBlankPost = 0;
    });
    
  }


  doRefresh(refresher) {
    this.loadContent();
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }



  add() {
    this.navCtrl.push('NewStreetPage');
  }

  showThisRecord(streetRecord: any, index: number) {
    this.navCtrl.push('StreetOfflinePage', { data: streetRecord, index: index });
  }

}
