import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedServices } from '../../app.services/library/shared.services';
import { AuthenticationService } from '../../app.services/http/authentication/auth.service';
import { Device } from '@ionic-native/device';
import { Geolocation } from '@ionic-native/geolocation';
import { CreateService } from '../../app.services/http/crud/create.services';
import { Store } from '../../app.services/store/data.store';

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {

  public attachments: any;
  public user: any;
  private payload: any = {
    device: {},
    message: '',
    location: {},
    user: {},
    created: new Date()
  };
  public renderContent: boolean = false;
  constructor(public navCtrl: NavController, private store: Store,
    public navParams: NavParams, private auth: AuthenticationService,
    private device: Device, private geolocation: Geolocation,
    private ss: SharedServices, private cs: CreateService) {

    this.deviceDataInit();
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {

  }

  deviceDataInit() {
    this.store.GET_USER().then(data => {
      this.user = data;
      this.payload.user = {
        id: this.user._id,
        firstname: this.user.personal.firstname,
        lastname: this.user.personal.lastname,
        email: this.user.personal.email,
        mobile: this.user.personal.mobile
      };
      this.payload.device = {
        uuid: this.device.uuid,
        model: this.device.model,
        platform: this.device.platform,
        version: this.device.version,
        manufacturer: this.device.manufacturer,
        is_virtual: this.device.isVirtual,
        hardware_serial: this.device.serial
      }

      this.renderContent = true;
    });


  }

  dismiss() {
    this.navCtrl.pop();
  }


  save() {
    if (this.auth.isAuthenticated()) {
      if (this.payload.message) {
        this.publishSupportMessage();
      } else {
        this.ss.toast('Please provide a message to support.', 2500);
      }
    } else {
      this.unAuthorizedReponse();
    }
  }

  publishSupportMessage() {
    this.ss.presentLoading();
    this.geolocation.getCurrentPosition({ timeout: 30000, enableHighAccuracy: true }).then((position) => {
      this.payload.location.type = 'Point';
      this.payload.location.coordinates = [position.coords.longitude, position.coords.latitude];
      this.payload.created = new Date();
      this.cs.publishSupportMessage(this.payload).then(response => {
        if (response['success']) {
          this.successReponse();
        } else {
          this.failedReponse();
        }
      }).catch((err) => {
        this.errorReponse(err);
      });
    }).catch(err => {
      this.failedLocationReponse();
    });
  }

  failedReponse() {
    this.ss.toast('Unable to post support message, please try again.', 2500);
    this.ss.dismissLoading();
    this.dismiss();
  }

  failedLocationReponse() {
    this.ss.toast('Unable to get your location for this story. Kindly try again.', 2500);
    this.ss.dismissLoading();
  }

  errorReponse(e) {
    this.ss.toast(`Error occurred while posting your support request, please try again.`, 2500);
    this.ss.dismissLoading();
    this.dismiss();
  }

  successReponse() {
    this.ss.toast('Support message sent successfully.', 2500);
    this.ss.dismissLoading();
    this.dismiss();
  }

  unAuthorizedReponse() {
    this.ss.toast(`Please login to submit support request.`, 2500);
    this.ss.dismissLoading();
    this.dismiss();
  }

}
