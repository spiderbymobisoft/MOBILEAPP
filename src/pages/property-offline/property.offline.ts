import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { PropertyPhotoPage } from '../property-photo/property-photo';
import { NewEntityPage } from '../new-entity/new-entity';
import { EntitiesOfflinePage } from '../entities-offline/entities.offline';
import { Store } from '../../app.services/store/data.store';

@IonicPage()
@Component({
  selector: 'page-property-offline',
  templateUrl: 'property.offline.html',
})
export class PropertyOfflinePage {

  public propertyRecord: any;
  public offlinePhotos: any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private actionSheetCtrl: ActionSheetController, private store: Store) {
    this.propertyRecord = navParams.get('data');
  }

  ionViewDidLoad() {
    this.offlinePhotos = this.store.GET_PROPERTY_PHOTOS(this.propertyRecord.property.property_id);
  }

  openMenuOption() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
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
    this.navCtrl.push(PropertyPhotoPage, { data: this.propertyRecord.property.property_id });
  }

  openNewEntityPage(){
    this.navCtrl.push(NewEntityPage, { data: this.propertyRecord.property.property_id });
  }

  openPropertyEntityPage(){
    this.navCtrl.push(EntitiesOfflinePage, { data: this.propertyRecord.property.property_id });
  }

}
