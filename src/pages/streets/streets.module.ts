import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetsPage } from './streets';

@NgModule({
  declarations: [
    StreetsPage,
  ],
  imports: [
    IonicPageModule.forChild(StreetsPage),
  ],
})
export class StreetsPageModule {}
