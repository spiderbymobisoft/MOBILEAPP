import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { FormConfig } from '../../app.services/store/form.config';

@IonicPage()
@Component({
  selector: 'page-edit-entity-offline',
  templateUrl: 'edit-entity-offline.html',
})
export class EditEntityOfflinePage {

  public payload: any;
  public entityGroup: any[] = [];
  public index: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formConfig: FormConfig, private store: Store, private ss: SharedServices) {
      this.dataInit();
  }

  ionViewDidLoad() {
    this.loadCategory(this.payload.entity.entity_group);
  }

  dataInit() {
    this.payload = this.navParams.get('data');
    this.index = this.navParams.get('index');
  }


  loadCategory(value) {
    this.entityGroup = this.formConfig.entityGroup.filter(data => data.title === value)[0]['sub_titles'];
  }

  isFormValid(): boolean {
    if(!this.payload.entity.entity_name || 
      !this.payload.entity.entity_group || 
      this.payload.entity.entity_categories.length === 0 ||
      !this.payload.entity.meter_condition ||
      !this.payload.entity.meter_phases ||
      this.payload.entity.meter_type.length === 0 ||
      !this.payload.entity.meter_number
    ){
      return false
    }else{
      return true
    }
  }

  save() {
    if (!this.isFormValid()) {
      this.ss.swalAlert('Data Service', 'All fields are required. Please try again', 'error');
    } else {
      this.processSave();
    }
  }

  processSave() {
    this.ss.presentLoading();
    this.store.UPDATE_OFFLINE_RECORD('__entities__', this.payload, this.index).then(()=>{
      this.ss.dismissLoading();
      this.navCtrl.pop();
    });
  }


}


