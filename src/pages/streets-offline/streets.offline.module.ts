import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetsOfflinePage } from './streets.offline';

@NgModule({
  declarations: [
    StreetsOfflinePage,
  ],
  imports: [
    IonicPageModule.forChild(StreetsOfflinePage),
  ],
})
export class StreetsOfflinePageModule {}
