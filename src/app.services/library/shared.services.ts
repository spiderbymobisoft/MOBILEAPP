import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

declare let swal: any;

@Injectable()
export class SharedServices {

  private loader: any;
  constructor(private toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {

  }

  toast(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'bottom'
    });
    toast.present();
  }

  swalAlert(title: string, text: string, type: string): void {
    swal(
      {
        title: title,
        text: text,
        type: type,
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonColor: '#0871FA',
        confirmButtonClass: 'btn btn-md btn-primary'
      }
    );
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  dismissLoading(){
    this.loader.dismiss();
  }

  get GENERATE_SIGNATURE(){
    const now = new Date().getTime();
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let text='SIGN-' + now + '-';
    let len = 16;
    for( let i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }

  
  GENERATE_RECORD_ID(){
    const now = new Date().getTime();
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let text='RID-' + now + '-';
    let len = 16;
    for( let i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }


  GENERATE_PHOTO_ID(){
    const now = new Date().getTime();
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let text='PIX-' + now + '-';
    let len = 16;
    for( let i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }

  GENERATE_STREET_ID(){
    const now = new Date().getTime();
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let text='SID-' + now + '-';
    let len = 16;
    for( let i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }

  GENERATE_PROPERTY_ID(){
    const now = new Date().getTime();
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let text='PID-' + now + '-';
    let len = 16;
    for( let i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }

  GENERATE_BUILDING_SERIAL_NUMBER(){
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var text='BSN-';
    var len = 12;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }

  GENERATE_GIS_ID(){
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var text='GIS-';
    var len = 12;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }

  GENERATE_ENTITY_ID(){
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var text='EID-';
    var len = 12;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }

}
