import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { AuthenticationService } from '../../app.services/http/authentication/auth.service';
import { LoginPage } from '../login/login';
/* import { SupportPage } from '../support/support'; */
import { StreetsPage } from '../streets/streets';
import { OfflinePage } from '../offline/offline';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public menuItems: any[] = [];

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private as: AuthenticationService) {
      this.menuInit();
  }



  menuInit() {
    this.menuItems = [{
      title: 'Profile Manager',
      img: 'assets/icon/user.svg',
      description: 'Profile Information & Access',
      page: ProfilePage
    },
    {
      title: 'Online Records',
      img: 'assets/icon/online.svg',
      description: 'View Online Records',
      page: StreetsPage
    },
    {
      title: 'Offline Records',
      img: 'assets/icon/offline.svg',
      description: 'View Offline Records',
      page: OfflinePage
    }/* ,
    {
      title: 'Support',
      img: 'assets/icon/support.svg',
      description: 'Send Support Message',
      page: SupportPage
    } */];
  }

  openThis(menu){
    this.navCtrl.push(menu.page)
  }

  logOut() {
    this.as.logout().then(response=>{
      if(response){
        this.navCtrl.parent.parent.setRoot(LoginPage);
      }
    });
  }

  ionViewWillEnter() {
  }

  ionViewDidLoad() {

  }





}
