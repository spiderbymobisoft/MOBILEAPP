import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SharedServices } from '../../app.services/library/shared.services';
import { AuthenticationService } from '../../app.services/http/authentication/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loading: boolean;
  public loginText: string;
  private networkErrorText: string = '';
  private remembrance: boolean;
  private main_page: { component: any };
  public login: any = {
    email: '',
    password: ''
  }

  constructor(public app: App, public navCtrl: NavController, 
    private ss: SharedServices, private as: AuthenticationService,
    public navParams: NavParams) {
    this.loginText = "SIGN IN";
    this.loading = false;
    this.main_page = { component: TabsPage };
    this.remembranceInit();
  }

  ionViewDidLoad() {

  }

  remembranceInit() {
    let _remembrance: string = localStorage.getItem('__remembrance__') || '';
    _remembrance === 'true' ? this.remembrance = true : this.remembrance = false;

    if (this.remembrance) {
      let login = {
        email: localStorage.getItem('__email__'),
        password: localStorage.getItem('__password__')
      }
      this.ss.presentLoading();
      this.validateLogin(login);
    }

  }

  doLogin() {
    this.loading = true;
    this.ss.presentLoading();
    this.validateLogin(this.login);
  }


  validateLogin(login) {
    if (!login.email || !login.password) {
      this.ss.dismissLoading();
      this.loginText = 'SIGN IN';
      this.loading = false;
    } else {
      this.as.authenticate(login).then(res => {
        if (res) {
          this.checkRemembrance(login);
          this.ss.dismissLoading();
          this.navCtrl.setRoot(this.main_page.component);
        } else {
          this.ss.dismissLoading();
          this.loginText = 'SIGN IN';
          this.loading = false;
          this.networkErrorText ? this.ss.toast(this.networkErrorText, 3000) : this.ss.toast("Invalid credentials. Please try again.", 2000);
          setTimeout(() => {
            this.networkErrorText = '';
          }, 3100);
        }
      }).catch(err => {
        this.ss.dismissLoading();
        this.loginText = 'SIGN IN';
        this.loading = false;
        this.ss.toast('Network Error. Please try again', 2000);
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


}
