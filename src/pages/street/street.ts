import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { StreetPhotoPage } from '../street-photo/street-photo';
import { NewPropertyPage } from '../new-property/new-property';
import { StreetPropertiesPage } from '../street-properties/street-properties';

@IonicPage()
@Component({
  selector: 'page-street',
  templateUrl: 'street.html',
})
export class StreetPage {

  public streetRecord: any;
  public sender: string;
  public offlinePhotos: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private actionSheetCtrl: ActionSheetController) {
    this.streetRecord = navParams.get('data');
  }

  ionViewDidLoad() {
  }

 

  openMenuOption() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Upload Street Photo',
          icon: 'camera',
          handler: () => {
            this.addPhoto();
          }
        }, {
          text: 'Add New Property',
          icon: 'pin',
          handler: () => {
            this.openNewPropertyPage(this.streetRecord);
          }
        },
        {
          text: 'Cancel',
          icon: 'arrow-round-back',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }

  addPhoto(){
    this.navCtrl.push(StreetPhotoPage, { data: this.streetRecord.street.street_id })
  }

  openNewPropertyPage(streetRecord){
    let payload: any = {
      street_id: streetRecord.street.street_id,
      street_name: streetRecord.street.street_name,
      lga: streetRecord.street.lga,
      state: streetRecord.street.state,
      country: streetRecord.street.country
    };
    this.navCtrl.push(NewPropertyPage, {data: payload});
  }

  openStreetPropertyPage(){
    this.navCtrl.push(StreetPropertiesPage, { data: this.streetRecord.street.street_id });
  }

}
