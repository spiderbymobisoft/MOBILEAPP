import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPropertyPage } from './new-property';

@NgModule({
  declarations: [
    NewPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPropertyPage),
  ],
})
export class NewPropertyPageModule {}
