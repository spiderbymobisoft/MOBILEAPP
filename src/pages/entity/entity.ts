import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { EntityPhotoPage } from '../entity-photo/entity-photo';

@IonicPage()
@Component({
  selector: 'page-entity',
  templateUrl: 'entity.html',
})
export class EntityPage {

  public entityRecord: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl: ActionSheetController) {
    this.entityRecord = navParams.get('data');
  }

  ionViewDidLoad() {
    
  }

  openMenuOption() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
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
    this.navCtrl.push(EntityPhotoPage, { data: this.entityRecord.property_id });
  }


}