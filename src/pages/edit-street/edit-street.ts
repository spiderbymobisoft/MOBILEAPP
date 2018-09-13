import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { NigeriaStatesService } from '../../app.services/locations/nigeria.states.service';
import { FormConfig } from '../../app.services/store/form.config';
import { UpdateService } from '../../app.services/http/crud/update.services';

@IonicPage()
@Component({
  selector: 'page-edit-street',
  templateUrl: 'edit-street.html',
})
export class EditStreetPage {

  public payload: any;
  public nigeriaStates: any[] = [];
  public stateCities: any[] = [];
  private user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formConfig: FormConfig, private us: UpdateService,
    private store: Store, private ss: SharedServices, private nss: NigeriaStatesService) {
    this.dataInit();
  }

  dataInit() {
    this.payload = this.navParams.get('data');
    this.payload.id = this.payload._id;
    this.payload.modified = new Date();
    this.store.GET_USER().then(data => {
      this.user = data;
      this.payload.modified_by = {
        id: this.user._id,
        firstname: this.user.personal.firstname,
        lastname: this.user.personal.lastname,
        email: this.user.personal.email,
        mobile: this.user.personal.mobile
      };
    });

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
  /* 
    processSave() {
      this.ss.presentLoading();
      this.payload.street.street_id = this.ss.GENERATE_STREET_ID();
      this.payload.enumerator = {
        id: this.user._id,
        firstname: this.user.personal.firstname,
        lastname: this.user.personal.lastname,
        email: this.user.personal.email,
        mobile: this.user.personal.mobile
      };
      this.geolocation.getCurrentPosition({ timeout: 30000, enableHighAccuracy: true }).then((position) => {
        this.ss.toast('Location captured', 2000);
        this.payload.location.coordinates = [position.coords.longitude, position.coords.latitude];
        this.cs.addNewStreet(this.payload).then(payload => {
          if (payload['success']) {
            this.ss.dismissLoading();
            this.ss.swalAlert('Data Service', 'Record added successfully. <br><b>Next</b>: Add street photo', 'success');
            this.navCtrl.pop().then(() => {
              this.navCtrl.push(StreetPhotoPage, { data: this.payload.street.street_id });
            });
          } else {
            this.ss.dismissLoading();
            this.ss.swalAlert('Data Service', 'Network connection error! Please try again.', 'error');
          }
        }).catch(err => {
          this.ss.dismissLoading();
          this.ss.swalAlert('Data Service', 'Network connection error! Please try again.', 'error');
        });
      }).catch(err => {
        this.ss.dismissLoading();
        this.ss.toast('Unable to capture device current location. Pleas turn on device location access', 3000);
      });
    } */

  processSave() {
    this.ss.presentLoading();
    this.us.updateStreet(this.payload).subscribe(data => {
      this.ss.dismissLoading();
      this.ss.swalAlert('Data Service', 'Street record updated successfully.', 'success');
      this.navCtrl.pop();
    }, err => {
      this.ss.dismissLoading();
      this.ss.swalAlert('Network Service', 'Unable to update record. Please try again or contact SPiDER support', 'error');
    });
  }
}
