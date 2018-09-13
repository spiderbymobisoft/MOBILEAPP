import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationService } from '../../app.services/http/authentication/auth.service';

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
      title: 'My Account',
      img: 'assets/icon/user.svg',
      description: 'Profile & Access',
      page: 'ProfilePage'
    },
    {
      title: 'Inbox',
      img: 'assets/icon/notification.svg',
      description: 'Internal Messaging',
      page: 'NotificationsPage'
    },
    {
      title: 'Online Records',
      img: 'assets/icon/online.svg',
      description: 'View Online Records',
      page: 'StreetsPage'
    },
    {
      title: 'Offline Records',
      img: 'assets/icon/offline.svg',
      description: 'View Offline Records',
      page: 'OfflinePage'
    },
    
    {
      title: 'Support',
      img: 'assets/icon/support.svg',
      description: 'Support Messaging',
      page: 'SupportPage'
    },
    {
      title: 'Settings',
      img: 'assets/icon/settings.svg',
      description: 'App Settings',
      page: 'SettingsPage'
    }];
  }

  openThis(menu){
    this.navCtrl.push(menu.page)
  }

  logOut() {
    this.as.logout().then(response=>{
      if(response){
        this.navCtrl.parent.parent.setRoot('LoginPage');
      }
    });
  }

  ionViewWillEnter() {
  }

  ionViewDidLoad() {

  }





}
