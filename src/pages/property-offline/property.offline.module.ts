import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyOfflinePage } from './property.offline';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    PropertyOfflinePage,
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(PropertyOfflinePage),
  ],
})
export class PropertyOfflinePageModule {}
