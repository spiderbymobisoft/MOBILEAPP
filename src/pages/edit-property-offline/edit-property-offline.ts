import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { FormConfig } from '../../app.services/store/form.config';


@IonicPage()
@Component({
  selector: 'page-edit-property-offline',
  templateUrl: 'edit-property-offline.html',
})
export class EditPropertyOfflinePage {

  public payload: any;
  public nigeriaStates: any[] = [];
  public stateCities: any[] = [];
  public index: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formConfig: FormConfig, private store: Store, private ss: SharedServices) {
    this.dataInit();
  }

  dataInit() {
    this.payload = this.navParams.get('data');
    this.index = this.navParams.get('index');
  }

  ionViewDidLoad() {

  }

  isFormValid(): boolean {
    if(
      !this.payload.property.building_serial_number || 
      !this.payload.property.house_number || 
      !this.payload.property.ownership_type || 
      this.payload.property.site_conditions.length === 0 || 
      this.payload.property.building_type.length === 0 || 
      this.payload.property.number_of_entity <= 0 ||
      !this.payload.property.building_part_occupied ||
      (this.payload.property.storey_building && this.payload.property.storey_building_floors <=0) ||
      this.payload.property.water_supply.length === 0 ||
      !this.payload.property.refuse_disposal
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
    this.store.UPDATE_OFFLINE_RECORD('__properties__', this.payload, this.index).then(()=>{
      this.ss.dismissLoading();
      this.navCtrl.pop();
    });
  }

}

