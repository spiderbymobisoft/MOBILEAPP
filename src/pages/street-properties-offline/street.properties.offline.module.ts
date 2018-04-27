import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetPropertiesOfflinePage } from './street.properties.offline';

@NgModule({
  declarations: [
    StreetPropertiesOfflinePage,
  ],
  imports: [
    IonicPageModule.forChild(StreetPropertiesOfflinePage),
  ],
})
export class StreetPropertiesOfflinePageModule {}
