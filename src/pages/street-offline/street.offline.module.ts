import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetOfflinePage } from './street.offline';

@NgModule({
  declarations: [
    StreetOfflinePage,
  ],
  imports: [
    IonicPageModule.forChild(StreetOfflinePage),
  ],
})
export class StreetOfflinePageModule {}
