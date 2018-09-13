import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SharedServices } from '../../app.services/library/shared.services';
import { Store } from '../../app.services/store/data.store';
import { AuthenticationService } from '../../app.services/http/authentication/auth.service';
import { UpdateService } from '../../app.services/http/crud/update.services';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user: any;
  private _base64Image: any;
  public avatar: string;
  private renderProfile: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private us: UpdateService,
    private actionSheetCtrl: ActionSheetController, private ss: SharedServices, private camera: Camera,
    private store: Store, private auth: AuthenticationService) {

  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {

    if (this.auth.isAuthenticated()) {
      this.dataInit();
    } else {
      this.navCtrl.setRoot('LoginPage');
    }

  }

  dataInit() {
    this.store.GET_USER().then(data => {
      this.user = data;
      this.avatar = this.user.personal.avatar;
      setTimeout(() => {
        this.renderProfile = true;
      }, 1000);
    });

  }


  dataFactory(data): string {
    if (data === null || data === undefined || data === '')
      return 'N/A';
    return data;
  }


  profilePic() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose your image',
      buttons: [
        {
          text: 'Gallery',
          handler: () => {
            this.openCamera(0);
          }
        }, {
          text: 'Camera',
          handler: () => {
            this.openCamera(1);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }


  private openCamera(sourceType) {

    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this._base64Image = 'data:image/jpg;base64,' + imageData;
      this.updateAvatar();
    }, (err) => {
      this.ss.toast('Unable to access your image data', 2000);
    });

  }

  updateAvatar() {
    this.ss.presentLoading();
    if (this._base64Image) {
      let payload = {
        id: this.user._id,
        profileimage: this._base64Image
      };
      this.us.updateUserAvatar(payload).subscribe(data => {
        if (data.success) {
          this.user = data.result;
          this.avatar = this.user.personal.avatar;
          this.store.UPDATE_USER(data.result);
          this.ss.toast('Profile picture updated succesfully', 2000);
          this.ss.dismissLoading();
        }
        else {
          this.ss.dismissLoading();
          this.ss.toast('Server error. Unable to update your profile picture. Try again.', 2000);
        }
      }, err => {
        this.ss.dismissLoading();
        this.ss.toast('Server error. Unable to update your profile picture. Try again.', 2000);
      });
    } else {
      this.ss.dismissLoading();
      this.ss.toast('Please provide profile image', 2000);
    }
  }

  openChangePassword() {
    this.navCtrl.push('SecurityPage');
  }

  logOut() {
    this.auth.logout().then(response => {
      if (response) {
        this.navCtrl.parent.parent.setRoot('LoginPage');
      }
    });
  }

}
