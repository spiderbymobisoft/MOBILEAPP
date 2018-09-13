import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpdateService } from '../../app.services/http/crud/update.services';
import { Events } from 'ionic-angular/util/events';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  data: any = {};
  private index: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private us: UpdateService, private event: Events) {

    this.data = navParams.get('data');    
    this.index = navParams.get('index');

  }

  ionViewDidLoad() {
    if(!this.data.read){
      this.markAsRead();
    }
  }

  markAsRead(){
    let payload = {
      id: this.data._id
    };
    this.us.updateNotificationReadStatus(payload).subscribe(data=>{
      if(data.success){
        this.event.publish('notification-read', this.index);
      }
    },err=>{});
  }

}
