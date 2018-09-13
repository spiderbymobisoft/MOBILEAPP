import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPropertyPage } from './edit-property';

@NgModule({
  declarations: [
    EditPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPropertyPage),
  ],
})
export class EditPropertyPageModule {}
