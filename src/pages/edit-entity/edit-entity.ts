import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { FormConfig } from '../../app.services/store/form.config';
import { UpdateService } from '../../app.services/http/crud/update.services';

@IonicPage()
@Component({
  selector: 'page-edit-entity',
  templateUrl: 'edit-entity.html',
})
export class EditEntityPage {

  public payload: any;
  public entityGroup: any[] = [];
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
    this.loadCategory(this.payload.entity.entity_group);
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
    this.us.updateEntity(this.payload).subscribe(data => {
      this.ss.dismissLoading();
      this.ss.swalAlert('Data Service', 'Entity record updated successfully.', 'success');
      this.navCtrl.pop();
    }, err => {
      this.ss.dismissLoading();
      this.ss.swalAlert('Network Service', 'Unable to update record. Please try again or contact SPiDER support', 'error');
    });
  }


}


