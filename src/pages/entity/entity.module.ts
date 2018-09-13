import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntityPage } from './entity';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    EntityPage,
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(EntityPage),
  ],
})
export class EntityPageModule {}
