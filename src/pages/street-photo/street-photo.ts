import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SharedServices } from '../../app.services/library/shared.services';
import { Store } from '../../app.services/store/data.store';

@IonicPage()
@Component({
  selector: 'page-street-photo',
  templateUrl: 'street-photo.html',
})
export class StreetPhotoPage {

  public payload: any = {
    street_id: '',
    snapshot_position: '',
    title: '',
    photo: '',
    location: {
      type: 'Point',
      coordinates: [],
      whatthreewords: ''
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: Store, private ss: SharedServices,
    private geolocation: Geolocation, private camera: Camera) {
    this.payload.street_id = this.navParams.get('data');
  }

  ionViewDidLoad() {

  }


  openCamera() {

    const options: CameraOptions = {
      quality: 100,
      sourceType: 1,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 800,
      targetHeight: 800,
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
      this.geolocation.getCurrentPosition({ timeout: 30000, enableHighAccuracy: true }).then((position) => {
        this.ss.toast('Location captured', 2000);
        this.payload.location.coordinates = [position.coords.longitude, position.coords.latitude];
        this.store.UPDATE_PHOTOS('__street_photos__',this.payload).then(feedback => {
          if (feedback) {
            this.ss.toast('Street photo stored succesfully. You can upload another photo or go back.', 3000);
            this.payload.title = '';
            this.payload.photo = '';
            this.payload.snapshot_position = '';
            this.ss.dismissLoading();
          }
          else {
            this.ss.dismissLoading();
            this.ss.toast('Storage Error. Unable to store this photo. please try again.', 2000);
          }
        }).catch(err=>{
          this.ss.dismissLoading();
          this.ss.toast('Storage Error. Unable to store this photo. Please try again.', 2000);
        });
      }).catch(err => {
        this.ss.dismissLoading();
        this.ss.toast('Unable to capture device current location. Pleas turn on device location access', 3000);
      });
    } else {
      this.ss.dismissLoading();
      this.ss.toast('Please take a photo of this street', 2000);
    }
  }

}
