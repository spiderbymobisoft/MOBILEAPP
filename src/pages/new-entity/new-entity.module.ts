import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewEntityPage } from './new-entity';

@NgModule({
  declarations: [
    NewEntityPage,
  ],
  imports: [
    IonicPageModule.forChild(NewEntityPage),
  ],
})
export class NewEntityPageModule {}
