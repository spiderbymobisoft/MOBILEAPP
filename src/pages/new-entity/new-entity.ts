import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { FormConfig } from '../../app.services/store/form.config';

@IonicPage()
@Component({
  selector: 'page-new-entity',
  templateUrl: 'new-entity.html',
})
export class NewEntityPage {
  public payload: any = {
    record_id: '',
    document_owner: '',
    building_serial_number: '',
    property_id: '',
    entity: {
      entity_id: '',
      entity_name: '',
      entity_group: '',
      entity_category: '',
      entity_categories: [],
      meter_available: false,
      meter_condition: '',
      meter_phases: '',
      meter_type: '',
      meter_number: '',
      has_signage: false,
      entity_detail: {}
    },
    contact: {
      contact_person: '',
      email: '',
      telephone: ''
    },
    location: {
      type: 'Point',
      coordinates: {
        latitude: 0,
        longitude: 0
      },
      whatthreewords: ''
    },
    property_photos: [],
    enumerator: {
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      telephone: ''
    },
    signature: ''
  };

  public entityGroup: any[] = [];

  private user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formConfig: FormConfig,
    private store: Store, private ss: SharedServices, private geolocation: Geolocation) {
    this.dataInit();
  }

  dataInit() {
    this.payload.property_id = this.navParams.get('propertyId');
    this.payload.building_serial_number = this.navParams.get('BSN');
    this.payload.record_id = this.ss.GENERATE_RECORD_ID();
    this.store.GET_USER().then(data=>{
      this.user = data;
    });
  }

  ionViewDidLoad() {

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
    this.payload.signature = this.ss.GENERATE_SIGNATURE;
    this.payload.document_owner = this.user.document_owner ? this.user.document_owner : this.user._id;
    this.payload.enumerator = {
      id: this.user._id,
      firstname: this.user.personal.firstname,
      lastname: this.user.personal.lastname,
      email: this.user.personal.email,
      mobile: this.user.personal.mobile
    };
    this.payload.entity.entity_id = this.ss.GENERATE_ENTITY_ID();
    this.geolocation.getCurrentPosition({ timeout: 30000, enableHighAccuracy: true }).then((position) => {
      this.ss.toast('Location captured', 2000);
      this.payload.location.coordinates = { latitude: position.coords.latitude, longitude: position.coords.longitude };
        this.store.UPDATE_RECORD('__entities__',this.payload).then(feedback => {
          if (feedback) {
            this.ss.dismissLoading();
            this.ss.swalAlert('Data Service', 'Record stored successfully. <br><b>Next</b>: Add entity photo', 'success');
            this.navCtrl.pop().then(() => {
              this.navCtrl.push('EntityPhotoPage', { 
                property: this.payload.property_id, 
                entity: this.payload.entity.entity_id,
                BSN: this.payload.building_serial_number
              }); 
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


