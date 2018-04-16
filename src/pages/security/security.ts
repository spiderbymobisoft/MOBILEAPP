import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { UpdateService } from '../../app.services/http/crud/update.services';



@IonicPage()
@Component({
  selector: 'page-security',
  templateUrl: 'security.html',
})
export class SecurityPage {

  private user: any;
  public loading: boolean;
  public payload: any = {
    password: '',
    confirm: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: Store, private ss: SharedServices, private us: UpdateService) {
    this.loading = false;
    this.user = store.GET_USER();
  }

  ionViewDidLoad() {

  }

  save() {
    if(!this.payload.password || !this.payload.confirm){
      this.ss.swalAlert('Account Service', 'New password and Confirm password are both required. Please try again', 'error');
    }else{
      if (this.payload.password === this.payload.confirm) {
        this.processSave();
      } else {
        this.ss.swalAlert('Account Service', 'New password and Confirm password mismatch. Please try again', 'error');
      }
    }
    
  }

  processSave() {
    this.ss.presentLoading();
    this.loading = true;
    this.payload.id = this.user._id;
    this.us.updateSecurity(this.payload).subscribe(data => {
      if (data.success) {
        this.ss.dismissLoading();
        this.loading = false;
        this.store.UPDATE_USER(data.result);
        this.ss.swalAlert('Account Service', 'Update successfully', 'success');
        this.navCtrl.pop();
      } else {
        this.ss.dismissLoading();
        this.loading = false;
        this.ss.swalAlert('Account Service', 'Network connection error! Please try again.', 'error');
      }
    }, err => {
      this.ss.dismissLoading();
      this.loading = false;
      this.ss.swalAlert('Account Service', 'Network connection error! Please try again.', 'error');
    });
  }

}
