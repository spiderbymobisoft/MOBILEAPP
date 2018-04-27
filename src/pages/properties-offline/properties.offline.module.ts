import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertiesOfflinePage } from './properties.offline';

@NgModule({
  declarations: [
    PropertiesOfflinePage,
  ],
  imports: [
    IonicPageModule.forChild(PropertiesOfflinePage),
  ],
})
export class PropertiesOfflinePageModule {}
