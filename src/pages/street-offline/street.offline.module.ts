import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetOfflinePage } from './street.offline';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    StreetOfflinePage,
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(StreetOfflinePage),
  ],
})
export class StreetOfflinePageModule {}
