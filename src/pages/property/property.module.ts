import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyPage } from './property';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    PropertyPage,
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(PropertyPage),
  ],
})
export class PropertyPageModule {}
