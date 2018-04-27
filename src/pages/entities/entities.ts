import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RetrieveService } from '../../app.services/http/crud/retrieve.services';
import { SharedServices } from '../../app.services/library/shared.services';
import { EntityPage } from '../entity/entity';

@IonicPage()
@Component({
  selector: 'page-entities',
  templateUrl: 'entities.html',
})
export class EntitiesPage {

  public entityRecords: any[] = [];
  public isBlankPost: number = 0;
  private networkErrorText: string = '';
  private propertyId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private rs: RetrieveService, private ss: SharedServices) {
      this.propertyId = navParams.get('data');
  }

  ionViewDidLoad() {
    this.getEntityRecords()
  }

  ionViewWillEnter() {
    
  }

  getEntityRecords() {
      this.rs.getEntityRecords(this.propertyId).subscribe(data => {
        let _data = data;
        if (_data.result.length > 0) {
          this.entityRecords =  _data.result;
          this.isBlankPost = 1;
        } else {
          this.isBlankPost = 1;
        }
      }, err => {
        this.networkErrorText = 'Network Error. Check your internet connection and try again';
        this.ss.toast(this.networkErrorText, 2000);
        this.entityRecords ? this.isBlankPost = 0 : this.isBlankPost = 1;
      });
  }

  showThisRecord(entityRecord){
    this.navCtrl.push(EntityPage, {data: entityRecord, sender: 'online'});
  }
}

