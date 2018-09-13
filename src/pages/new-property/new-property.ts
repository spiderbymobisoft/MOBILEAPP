import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { FormConfig } from '../../app.services/store/form.config';
import { BSNStore } from '../../app.services/store/bsn.store';

@IonicPage()
@Component({
  selector: 'page-new-property',
  templateUrl: 'new-property.html',
})
export class NewPropertyPage {

  public payload: any = {
    record_id: '',
    document_owner: '',
    property: {
      property_id: '',
      street_id: '',
      building_serial_number: '',
      master_building_serial_number: '',
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
      storey_building_floors: 0,
      water_supply: [],
      refuse_disposal: '',
      has_signage: false,
      gate_house_id: '',
      generator_house_id: '',
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

  public nigeriaStates: any[] = [];
  public stateCities: any[] = [];
  public bsnList: any[]=[];
  private user: any;
  private streetData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formConfig: FormConfig, private bsn: BSNStore,
    private store: Store, private ss: SharedServices, private geolocation: Geolocation) {
    this.streetData = navParams.get('data');
    this.dataInit();
  }

  dataInit() {
    this.store.GET_USER().then(data=>{
      this.user = data;
      this.getBSN();
    });
    this.payload.record_id = this.ss.GENERATE_RECORD_ID();
    this.payload.property.street_id = this.streetData['street_id'];
    this.payload.property.street_name = this.streetData['street_name'];
    this.payload.property.lga = this.streetData['lga'];
    this.payload.property.state = this.streetData['state'];
    this.payload.property.country = this.streetData['country'];
  }

  ionViewDidLoad() {

  }

  getBSN(){
    this.bsn.GET().then(docs=> this.bsnList = docs);
  }

  isFormValid(): boolean {
    if(!this.payload.property.house_number || 
      !this.payload.property.ownership_type || 
      this.payload.property.site_conditions.length === 0 || 
      this.payload.property.building_type.length === 0 || 
      !this.payload.property.building_part_occupied
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
    this.payload.property.property_id = this.ss.GENERATE_PROPERTY_ID();
    this.payload.document_owner = this.user.document_owner ? this.user.document_owner : this.user._id;
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
    if(this.payload.property.master_building_serial_number === ''){
      this.payload.property.master_building_serial_number = this.payload.property.building_serial_number;
    }
    this.geolocation.getCurrentPosition({ timeout: 30000, enableHighAccuracy: true }).then((position) => {
      this.ss.toast('Location captured', 2000);
      this.payload.location.coordinates = { latitude: position.coords.latitude, longitude: position.coords.longitude };
      this.store.UPDATE_RECORD('__properties__',this.payload).then(feedback => {
        if (feedback) {
          this.success();
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


  success(){
    this.ss.dismissLoading();
          this.bsn.UPDATE(this.bsnList.filter(doc => doc.bsn != this.payload.property.building_serial_number))
          .then(status=>{
            this.ss.swalAlert('Data Service', 'Record stored successfully. <br><b>Next</b>: Add property photo', 'success');
            this.navCtrl.pop().then(() => {
              this.navCtrl.push('PropertyPhotoPage', { data: this.payload.property.property_id });
            });
          });
  }

}

