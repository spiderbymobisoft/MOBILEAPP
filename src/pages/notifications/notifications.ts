import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RetrieveService } from '../../app.services/http/crud/retrieve.services';
import { Store } from '../../app.services/store/data.store';
import { SharedServices } from '../../app.services/library/shared.services';
import { Events } from 'ionic-angular/util/events';


@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  public notifications: any[] = [];
  //private broadcast: any[] = [];
  //private private: any[]=[];
  public user: any;
  public isBlankPost: number = 0;
  private networkErrorText: string = '';
  private start: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, event: Events,
    private rs: RetrieveService, private store: Store, private ss: SharedServices) {

      event.subscribe('notification-read',index=>{
        this.notifications[index].read = true;
      });
  }

  ionViewDidLoad() {
    this.dataInit();
  }

  ionViewWillEnter() {
  }

  dataInit() {
    this.store.GET_USER().then(user => this.user = user);
    setTimeout(() => {
      console.log(this.user._id);
      this.loadContent();
    }, 500);
  }

  loadContent() {
    this.getNotifications().then(res => {
      if (!res) {
        this.isBlankPost = 1;
        setTimeout(() => {
          this.networkErrorText = '';
        }, 3100);
      }
    });
  }


  pullGetNotifications() {
    return new Promise(resolve => {
      this.isBlankPost = 0;
      this.start = 0;
      this.rs.getNotifications(this.user._id,this.start).subscribe(data => {
        let _data = data;
        _data = data;
        if (_data.result.length > 0) {
          this.notifications = _data.result;
          this.isBlankPost = 1;
          resolve(true);
        } else {
          resolve(false);
          this.isBlankPost = 1
        }
      }, err => {
        this.networkErrorText = 'Network Error. Check your internet connection and try again';
        this.ss.toast(this.networkErrorText, 2000);
        this.notifications.length > 0 ? this.isBlankPost = 0 : this.isBlankPost = 1;
        resolve(false);
        setTimeout(() => {
          this.networkErrorText = '';
        }, 3100);
      });


    }).catch((err) => {
      this.ss.toast('Unable to perform this operation. Please try again', 3000);
    });
  }

  getNotifications() {
    return new Promise(resolve => {
      this.rs.getNotifications(this.user._id,this.start).subscribe(data => {
        let _data = data;
        if (_data.result.length > 0) {
          this.notifications = _data.result;
          this.isBlankPost = 1;
          resolve(true);
        } else {
          this.isBlankPost = 1
          resolve(false);
        }
      }, err => {
        this.networkErrorText = 'Network Error. Check your internet connection and try again';
        this.notifications ? this.isBlankPost = 0 : this.isBlankPost = 1;
        resolve(false);
      });
    }).catch((err) => {
      this.notifications.length > 0 ? this.isBlankPost = 0 : this.isBlankPost = 1;
      this.ss.toast('Unable to perform this operation. Please try again', 2000);
    });
  }

  getMoreNotifications() {
    return new Promise(resolve => {
      this.rs.getNotifications(this.user._id,this.start).subscribe(data => {
        let _data = data;
        if (_data.result.length > 0) {
          this.notifications = [...this.notifications, ..._data.result];
          this.isBlankPost = 1;
          resolve(true);
        } else {
          this.isBlankPost = 1
          resolve(false);
        }
      }, err => {
        this.networkErrorText = 'Network Error. Check your internet connection and try again';
        this.notifications ? this.isBlankPost = 0 : this.isBlankPost = 1;
        resolve(false);
      });
    }).catch((err) => {
      this.notifications.length > 0 ? this.isBlankPost = 0 : this.isBlankPost = 1;
      this.ss.toast('Unable to perform this operation. Please try again', 2000);
    });
  }


  doRefresh(refresher) {
    this.pullGetNotifications().then((res) => {
      if (!res) {
        setTimeout(() => {
          this.networkErrorText = '';
        }, 3100);
      }
    });
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }

  doInfinite(infiniteScroll: any) {
    this.start += 50;
      this.getMoreNotifications().then(() => {
        infiniteScroll.complete();
      }).catch(err => {
        this.ss.toast('No network connection...', 2000);
        infiniteScroll.complete();
      });
  }


  showThisNotification(notification: any, index: number) {
    this.navCtrl.push('NotificationPage', { data: notification, index: index })
  }

}
