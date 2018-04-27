import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntitiesOfflinePage } from './entities.offline';

@NgModule({
  declarations: [
    EntitiesOfflinePage,
  ],
  imports: [
    IonicPageModule.forChild(EntitiesOfflinePage),
  ],
})
export class EntitiesOfflinePageModule {}
