import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditEntityPage } from './edit-entity';

@NgModule({
  declarations: [
    EditEntityPage,
  ],
  imports: [
    IonicPageModule.forChild(EditEntityPage),
  ],
})
export class EditEntityPageModule {}
