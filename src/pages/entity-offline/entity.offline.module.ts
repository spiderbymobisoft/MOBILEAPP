import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntityOfflinePage } from './entity.offline';

@NgModule({
  declarations: [
    EntityOfflinePage,
  ],
  imports: [
    IonicPageModule.forChild(EntityOfflinePage),
  ],
})
export class EntityOfflinePageModule {}
