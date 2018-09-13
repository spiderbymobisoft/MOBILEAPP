import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';

@IonicPage()
@Component({
  selector: 'page-entities-offline',
  templateUrl: 'entities.offline.html',
})
export class EntitiesOfflinePage {

  public entityRecords: any[] = [];
  public isBlankPost: number = 0;
  private propertyId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: Store) {
      this.propertyId = navParams.get('data');
  }

  ionViewDidLoad() {
    this.getEntityRecords()
  }

  ionViewWillEnter() {
    
  }

  getEntityRecords() {
    this.store.GET_PROPERTY_ENTITIES(this.propertyId).then(data=>{
      this.entityRecords = data || [];
      this.entityRecords.length == 0 ? this.isBlankPost = 1 : this.isBlankPost = 0;
    });
    
  }

  showThisRecord(entityRecord: any, index: number){
    this.navCtrl.push('EntityOfflinePage', {data: entityRecord, index: index});
  }
}

