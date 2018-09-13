import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-property',
  templateUrl: 'property.html',
})
export class PropertyPage {

  public propertyRecord: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl: ActionSheetController) {
    this.propertyRecord = navParams.get('data');
  }

  ionViewDidLoad() {
    
  }

  openMenuOption() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Edit Property Data',
          icon: 'create',
          handler: () => {
            this.navCtrl.push('EditPropertyPage',{data: this.propertyRecord});
          }
        },
        {
          text: 'Upload Property Photo',
          icon: 'camera',
          handler: () => {
            this.addPhoto();
          }
        }, {
          text: 'Add New Property Entity',
          icon: 'pin',
          handler: () => {
            this.openNewEntityPage();
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
    this.navCtrl.push('PropertyPhotoPage', { data: this.propertyRecord.property.property_id });
  }

  openNewEntityPage(){
    this.navCtrl.push('NewEntityPage', 
    { 
      propertyId: this.propertyRecord.property.property_id, 
      BSN: this.propertyRecord.property.building_serial_number 
    });
  }

  openPropertyEntityPage(){
    this.navCtrl.push('EntitiesPage', { data: this.propertyRecord.property.property_id });
  }

}
