import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewStreetPage } from './new-street';

@NgModule({
  declarations: [
    NewStreetPage,
  ],
  imports: [
    IonicPageModule.forChild(NewStreetPage),
  ],
})
export class NewStreetPageModule {}
