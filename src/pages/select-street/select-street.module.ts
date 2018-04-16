import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectStreetPage } from './select-street';

@NgModule({
  declarations: [
    SelectStreetPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectStreetPage),
  ],
})
export class SelectStreetPageModule {}
