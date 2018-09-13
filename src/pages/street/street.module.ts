import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetPage } from './street';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    StreetPage,
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(StreetPage),
  ],
})
export class StreetPageModule {}
