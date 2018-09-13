import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-entity',
  templateUrl: 'entity.html',
})
export class EntityPage {

  public entityRecord: any;
  public offlinePhotos: any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private actionSheetCtrl: ActionSheetController) {
    this.entityRecord = navParams.get('data');
  }

  ionViewDidLoad() {
  }

 

  openMenuOption() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Edit Entity Data',
          icon: 'create',
          handler: () => {
            this.navCtrl.push('EditEntityPage',{data: this.entityRecord});
          }
        },
        {
          text: 'Upload Property Entity Photo',
          icon: 'camera',
          handler: () => {
            this.addPhoto();
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
    this.navCtrl.push('EntityPhotoPage', { 
      entity: this.entityRecord.entity.entity_id, 
      property: this.entityRecord.property_id, 
      BSN: this.entityRecord.building_serial_number 
    });
  }


}