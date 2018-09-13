import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedServices } from '../../app.services/library/shared.services';
import { APIConfig } from '../../app.services/apiconfig/api.config';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  serverConfig: any = {
    ip: '127.0.0.1',
    port: 5110,
    cloud: true
  }; 
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private ss: SharedServices, private api: APIConfig) {
      api.getLocalServerSettings().then(settings=>{
        this.serverConfig  = settings;
      });
  }

  ionViewDidLoad() {
    
  }

  useCloudChangeEvent(e) {
    if (e.checked) {
      this.serverConfig.cloud = true;
    } else {
      this.serverConfig.cloud = false;
    }
  }

  updateSettings() {
    if(this.validateIP(this.serverConfig.ip)){
      //Save settings
      this.ss.toast('Server settings saved! Restarting app...', 3000);
      this.api.updateLocalServerSettings(this.serverConfig).then(()=>{
        window.location.reload();
      });
    }else{
      this.ss.toast('Invalid IP Address! ' + this.serverConfig.ip, 3000);
    }
  }

  validateIP(ip) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
      return (true);
    }
    return (false);
  }

}
