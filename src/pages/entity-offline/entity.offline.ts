import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { EntityPhotoPage } from '../entity-photo/entity-photo';
import { Store } from '../../app.services/store/data.store';

@IonicPage()
@Component({
  selector: 'page-entity-offline',
  templateUrl: 'entity.offline.html',
})
export class EntityOfflinePage {

  public entityRecord: any;
  public sender: string;
  public offlinePhotos: any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private actionSheetCtrl: ActionSheetController, private store: Store) {
    this.entityRecord = navParams.get('data');
  }

  ionViewDidLoad() {
    this.offlinePhotos = this.store.GET_ENTITY_PHOTOS(this.entityRecord.entity.entity_id);
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