import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { FormConfig } from '../../app.services/store/form.config';
import { UpdateService } from '../../app.services/http/crud/update.services';


@IonicPage()
@Component({
  selector: 'page-edit-property',
  templateUrl: 'edit-property.html',
})
export class EditPropertyPage {

  public payload: any;
  public nigeriaStates: any[] = [];
  public stateCities: any[] = [];
  private user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formConfig: FormConfig, private us: UpdateService,
    private store: Store, private ss: SharedServices) {
    this.dataInit();
  }

  dataInit() {
    this.payload = this.navParams.get('data');
    this.payload.id = this.payload._id;
    this.payload.modified = new Date();
    this.store.GET_USER().then(data=>{
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
  this.us.updateProperty(this.payload).subscribe(data => {
    this.ss.dismissLoading();
    this.ss.swalAlert('Data Service','Property record updated successfully.', 'success');
    this.navCtrl.pop();
  }, err => {
    this.ss.dismissLoading();
    this.ss.swalAlert('Network Service','Unable to update record. Please try again or contact SPiDER support', 'error');
  });
}


}

