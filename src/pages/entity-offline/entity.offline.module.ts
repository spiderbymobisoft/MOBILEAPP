import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntityOfflinePage } from './entity.offline';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    EntityOfflinePage,
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(EntityOfflinePage),
  ],
})
export class EntityOfflinePageModule {}
