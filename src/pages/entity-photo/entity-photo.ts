import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SharedServices } from '../../app.services/library/shared.services';
import { Store } from '../../app.services/store/data.store';

@IonicPage()
@Component({
  selector: 'page-entity-photo',
  templateUrl: 'entity-photo.html',
})
export class EntityPhotoPage {

  public payload: any = {
    photo_id: '',
    property_id: '',
    entity_id: '',
    snapshot_position: '',
    photo: '',
    signature: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: Store, private ss: SharedServices,
    private camera: Camera) {
    this.payload.property_id = navParams.get('property');
    this.payload.entity_id = navParams.get('entity');
    this.payload.building_serial_number = navParams.get('BSN');
    this.payload.photo_id = ss.GENERATE_PHOTO_ID();
  }

  ionViewDidLoad() {

  }


  openCamera() {

    const options: CameraOptions = {
      quality: 60,
      sourceType: 1,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true,
      correctOrientation: true,
      allowEdit: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.payload.photo = 'data:image/jpg;base64,' + imageData;
    }, (err) => {
      this.ss.toast('Unable to access device photo', 3000);
    });

  }

  save() {
    this.ss.presentLoading();
    if (this.payload.photo) {
      this.payload.signature = this.ss.GENERATE_SIGNATURE;
      this.store.UPDATE_PHOTOS('__entity_photos__', this.payload).then(feedback => {
        if (feedback) {
          this.ss.toast('Entity photo stored successfully. You can upload another photo or go back.', 3000);
          this.payload.photo = '';
          this.payload.snapshot_position = '';
          this.ss.dismissLoading();
        }
        else {
          this.ss.dismissLoading();
          this.ss.toast('Storage error. Unable to store this photo. please try again.', 2000);
        }
      }, err => {
        this.ss.dismissLoading();
        this.ss.toast('Storage error. Unable to store this photo. Please try again.', 2000);
      });
    } else {
      this.ss.dismissLoading();
      this.ss.toast('Please take a photo of this entity', 2000);
    }
  }

}
