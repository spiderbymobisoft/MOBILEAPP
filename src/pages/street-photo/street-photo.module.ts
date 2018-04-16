import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetPhotoPage } from './street-photo';

@NgModule({
  declarations: [
    StreetPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(StreetPhotoPage),
  ],
})
export class StreetPhotoPageModule {}
