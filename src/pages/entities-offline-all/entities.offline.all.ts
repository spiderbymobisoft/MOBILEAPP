import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';

@IonicPage()
@Component({
  selector: 'page-entities-offline-all',
  templateUrl: 'entities.offline.all.html',
})
export class EntitiesOfflineAllPage {

  public entityRecords: any[] = [];
  public isBlankPost: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: Store) {
      
  }

  ionViewDidLoad() {
    this.getEntityRecords()
  }

  ionViewWillEnter() {
    
  }

  getEntityRecords() {
    this.store.GET_RECORD('__entities__').then(data=>{
      this.entityRecords = data || [];
      this.entityRecords.length == 0 ? this.isBlankPost = 1 : this.isBlankPost = 0;
    });
    
  }

  showThisRecord(entityRecord: any, index: number){
    this.navCtrl.push('EntityOfflinePage', {data: entityRecord, index: index});
  }
}

