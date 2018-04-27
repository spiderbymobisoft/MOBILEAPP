import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyOfflinePage } from './property.offline';

@NgModule({
  declarations: [
    PropertyOfflinePage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyOfflinePage),
  ],
})
export class PropertyOfflinePageModule {}
