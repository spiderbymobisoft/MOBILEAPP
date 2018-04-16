import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntityPhotoPage } from './entity-photo';

@NgModule({
  declarations: [
    EntityPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(EntityPhotoPage),
  ],
})
export class EntityPhotoPageModule {}
