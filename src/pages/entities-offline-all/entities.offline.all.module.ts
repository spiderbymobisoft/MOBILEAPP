import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntitiesOfflineAllPage } from './entities.offline.all';

@NgModule({
  declarations: [
    EntitiesOfflineAllPage,
  ],
  imports: [
    IonicPageModule.forChild(EntitiesOfflineAllPage),
  ],
})
export class EntitiesOfflineAllPageModule {}
