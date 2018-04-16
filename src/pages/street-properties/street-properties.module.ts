import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetPropertiesPage } from './street-properties';

@NgModule({
  declarations: [
    StreetPropertiesPage,
  ],
  imports: [
    IonicPageModule.forChild(StreetPropertiesPage),
  ],
})
export class StreetPropertiesPageModule {}
