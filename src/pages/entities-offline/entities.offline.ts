import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { EntityOfflinePage } from '../entity-offline/entity.offline';

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
    this.entityRecords = this.store.GET_PROPERTY_ENTITIES(this.propertyId);
    this.entityRecords.length == 0 ? this.isBlankPost = 1 : this.isBlankPost = 0;
  }

  showThisRecord(entityRecord){
    this.navCtrl.push(EntityOfflinePage, {data: entityRecord});
  }
}

