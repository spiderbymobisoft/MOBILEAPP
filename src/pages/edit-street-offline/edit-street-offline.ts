import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { NigeriaStatesService } from '../../app.services/locations/nigeria.states.service';
import { FormConfig } from '../../app.services/store/form.config';

@IonicPage()
@Component({
  selector: 'page-edit-street-offline',
  templateUrl: 'edit-street-offline.html',
})
export class EditStreetOfflinePage {

  public payload: any;
  public nigeriaStates: any[] = [];
  public stateCities: any[] = [];
  public index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formConfig: FormConfig, private store: Store, private ss: SharedServices,
    private nss: NigeriaStatesService) {
    this.dataInit();
  }

  dataInit() {
    this.payload = this.navParams.get('data');
    this.index  = this.navParams.get('index');
  }

  ionViewDidLoad() {
    this.getLocations();
  }

  getLocations() {
    this.nss.getJSON().subscribe(data => {
      let _data = data;
      _data.forEach(_d => {
        this.nigeriaStates.push(_d.state.name);
      });
    });
  }

  loadCity(e) {
    this.stateCities = [];
    this.nss.getJSON().subscribe(data => {
      let _data = data;
      _data.forEach(_d => {
        if (_d.state.name === e) {
          _d.state.locals.forEach(local => {
            this.stateCities.push(local);
          });
        }
      });
    });
  }

  isFormValid(): boolean {
    if(
      !this.payload.street.street_name || 
      !this.payload.street.area || 
      !this.payload.street.location || 
      !this.payload.street.lga || 
      !this.payload.street.state ||
      !this.payload.street.road_type ||
      this.payload.street.street_furniture.length === 0 ||
      !this.payload.street.road_condition ||
      !this.payload.street.road_carriage ||
      this.payload.street.road_feature.length === 0 ||
      !this.payload.street.refuse_disposal ||
      !this.payload.street.drainage ||
      !this.payload.street.electricity
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
    this.store.UPDATE_OFFLINE_RECORD('__streets__', this.payload, this.index).then(() => {
      this.ss.dismissLoading();
      this.navCtrl.pop();
    });
  }

}
