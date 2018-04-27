import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { NigeriaStatesService } from '../../app.services/locations/nigeria.states.service';
import { FormConfig } from '../../app.services/store/form.config';
import { StreetPhotoPage } from '../street-photo/street-photo';

@IonicPage()
@Component({
  selector: 'page-new-street',
  templateUrl: 'new-street.html',
})
export class NewStreetPage {

  public payload: any = {
    street: {
      street_id: '',
      gis_id: '',
      street_name: '',
      street_furniture: [],
      road_type: '',
      road_condition: '',
      road_carriage: '',
      road_feature: [],
      refuse_disposal: '',
      drainage: '',
      electricity: '',
      area: '',
      location: '',
      lga: '',
      state: '',
      country: 'Nigeria'
    },
    location: {
      type: 'Point',
      coordinates: [],
      whatthreewords: ''
    },
    street_photos: [],
    enumerator: {
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      telephone: ''
    }
  }

  public nigeriaStates: any[] = [];
  public stateCities: any[] = [];
  private user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formConfig: FormConfig,
    private store: Store, private ss: SharedServices, private nss: NigeriaStatesService,
    private geolocation: Geolocation) {
    this.user = store.GET_USER();
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

  save() {
    if (!this.payload.street.street_name || !this.payload.street.area || !this.payload.street.location || !this.payload.street.lga || !this.payload.street.state) {
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
    this.payload.street.street_id = this.ss.GENERATE_STREET_ID();
    this.payload.street.gis_id = this.ss.GENERATE_GIS_ID();
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
      
      this.store.UPDATE_RECORD('__streets__',this.payload).then(feedback => {
        if (feedback) {
          this.ss.dismissLoading();
          this.ss.swalAlert('Data Service', 'Record stored successfully. <br><b>Next</b>: Add street photo', 'success');
          this.navCtrl.pop().then(() => {
            this.navCtrl.push(StreetPhotoPage, { data: this.payload.street.street_id });
          });
        } else {
          this.ss.dismissLoading();
          this.ss.swalAlert('Data Service', 'Storage error! Please try again.', 'error');
        }
      }).catch(err => {
        this.ss.dismissLoading();
        this.ss.swalAlert('Data Service', 'Storage error! Please try again.', 'error');
      });
    }).catch(err => {
      this.ss.dismissLoading();
      this.ss.toast('Unable to capture device current location. Pleas turn on device location access', 3000);
    });
   
  }
}
