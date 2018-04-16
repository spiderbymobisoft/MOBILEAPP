import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyPhotoPage } from './property-photo';

@NgModule({
  declarations: [
    PropertyPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyPhotoPage),
  ],
})
export class PropertyPhotoPageModule {}
