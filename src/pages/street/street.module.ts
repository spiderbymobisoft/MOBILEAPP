import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetPage } from './street';

@NgModule({
  declarations: [
    StreetPage,
  ],
  imports: [
    IonicPageModule.forChild(StreetPage),
  ],
})
export class StreetPageModule {}
