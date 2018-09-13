import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedServices } from '../../app.services/library/shared.services';
import { AuthenticationService } from '../../app.services/http/authentication/auth.service';
import { Device } from '@ionic-native/device';
import { OneSignal } from '@ionic-native/onesignal';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loading: boolean;
  public loginText: string;
  private remembrance: boolean;
  private main_page: { component: any };
  public login: any = {
    email: '',
    password: '',
    device: {},
    oneId: ''
  };

  constructor(public app: App, public navCtrl: NavController,
    private ss: SharedServices, private as: AuthenticationService,
    public navParams: NavParams, private device: Device,
    private oneSignal: OneSignal) {
    this.loginText = "SIGN IN";
    this.loading = false;
    this.main_page = { component: 'TabsPage' };
  }

  ionViewDidLoad() {
    this.getDeviceSpecification().then((response) => {
      this.getOneSignalPlayerId().then(res => {
        this.remembranceInit();
      });
    });
  }

  getDeviceSpecification() {
    return new Promise(resolve => {
      this.login.device = {
        is_available: true,
        is_active: true,
        specification: {
          uuid: this.device.uuid,
          model: this.device.model,
          platform: this.device.platform,
          version: this.device.version,
          manufacturer: this.device.manufacturer,
          is_virtual: this.device.isVirtual,
          hardware_serial: this.device.serial
        }
      }
      resolve(true)
    })
  }

  getOneSignalPlayerId() {
    return new Promise(resolve => {
      this.oneSignal.getIds().then(data => {
        this.login.oneId = data.userId;
        resolve(true);
      });
    });
  }

  remembranceInit() {
    let _remembrance: string = localStorage.getItem('__remembrance__') || '';
    _remembrance === 'true' ? this.remembrance = true : this.remembrance = false;

    if (this.remembrance) {
      this.login.email = localStorage.getItem('__email__');
      this.login.password = localStorage.getItem('__password__');
      this.ss.presentLoading();
      this.validateLogin(this.login);
    }

  }

  doLogin() {
    this.loading = true;
    this.ss.presentLoading();
    this.getDeviceSpecification().then(response => {
      this.getOneSignalPlayerId().then(res => {
        this.validateLogin(this.login);
      });
    });
  }


  validateLogin(login) {
    if (!login.email || !login.password) {
      this.empty();
    } else {
      this.as.authenticate(login).then(res => {
        if (res['success']) {
          this.success(login);
        } else {
          this.fail();
        }
      }).catch(err => {
        this.error()
      });
    }
  }


  checkRemembrance(login) {
    if (this.remembrance) {
      localStorage.setItem('__remembrance__', 'true');
      localStorage.setItem('__email__', login.email);
      localStorage.setItem('__password__', login.password);
    } else {
      localStorage.removeItem('__email__');
      localStorage.removeItem('__password__');
    }
  }

  success(login) {
    this.checkRemembrance(login);
    this.ss.dismissLoading();
    this.navCtrl.setRoot(this.main_page.component);
  }

  empty() {
    this.ss.dismissLoading();
    this.loginText = 'SIGN IN';
    this.loading = false;
  }

  fail() {
    this.ss.dismissLoading();
    this.loginText = 'SIGN IN';
    this.loading = false;
    this.ss.toast("Invalid credentials. Please try again.", 2000);
  }

  error() {
    this.ss.dismissLoading();
    this.loginText = 'SIGN IN';
    this.loading = false;
    this.ss.toast('Network Error. Please try again', 2000);
  }


}
