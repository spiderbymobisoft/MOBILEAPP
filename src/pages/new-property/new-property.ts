import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { CreateService } from '../../app.services/http/crud/create.services';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { FormConfig } from '../../app.services/store/form.config';
import { PropertyPhotoPage } from '../property-photo/property-photo';

@IonicPage()
@Component({
  selector: 'page-new-property',
  templateUrl: 'new-property.html',
})
export class NewPropertyPage {

  public payload: any = {
    property: {
      property_id: '',
      street_id: '',
      building_serial_number: '',
      building_part_occupied: '',
      ownership_type: '',
      house_number: '',
      street_name: '',
      lga: '',
      state: '',
      country: '',
      site_conditions: [],
      building_type: [],
      storey_building: false,
      storey_building_floors: 1,
      water_supply: [0],
      refuse_disposal: '',
      has_signage: false,
      gate_house: 0,
      generator_house: 0,
      boys_quarter: 0,
      number_of_entity: 1,
      accessible: true
    },
    contact: {
      contact_person: '',
      email: '',
      telephone: ''
    },
    location: {
      type: 'Point',
      coordinates: [],
      whatthreewords: ''
    },
    enumerator: {
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      telephone: ''
    }
  };

  public nigeriaStates: any[] = [];
  public stateCities: any[] = [];
  private user: any;
  private streetData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formConfig: FormConfig,
    private cs: CreateService, private store: Store, private ss: SharedServices,
    private geolocation: Geolocation) {
    this.streetData = navParams.get('data');
    this.dataInit();
  }

  dataInit() {
    this.user = this.store.GET_USER();
    this.payload.property.street_id = this.streetData['street_id'];
    this.payload.property.street_name = this.streetData['street_name'];
    this.payload.property.lga = this.streetData['lga'];
    this.payload.property.state = this.streetData['state'];
    this.payload.property.country = this.streetData['country'];
  }

  ionViewDidLoad() {

  }

  save() {
    if (!this.payload.property.house_number || !this.payload.property.ownership_type || !this.payload.property.site_condition || this.payload.property.number_of_entity <= 0) {
      this.ss.swalAlert('Data Service', 'All fields are required. Please try again', 'error');
    } else {
      this.processSave();
    }

  }

  processSave() {
    this.ss.presentLoading();
    this.payload.property.property_id = this.ss.GENERATE_PROPERTY_ID();
    this.payload.enumerator = {
      id: this.user._id,
      firstname: this.user.personal.firstname,
      lastname: this.user.personal.lastname,
      email: this.user.personal.email,
      mobile: this.user.personal.mobile
    };
    if(this.payload.property.building_serial_number === ''){
      this.payload.property.building_serial_number = this.ss.GENERATE_BUILDING_SERIAL_NUMBER();
    }
    this.geolocation.getCurrentPosition({ timeout: 30000, enableHighAccuracy: true }).then((position) => {
      this.ss.toast('Location captured', 2000);
      this.payload.location.coordinates = [position.coords.longitude, position.coords.latitude];
      this.cs.addNewProperty(this.payload).then(payload => {
        if (payload['success']) {
          this.ss.dismissLoading();
          this.ss.swalAlert('Data Service', 'Record added successfully. <br><b>Next</b>: Add property photo', 'success');
          this.navCtrl.pop().then(() => {
            this.navCtrl.push(PropertyPhotoPage, { data: this.payload.property.property_id });
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
  }


}

