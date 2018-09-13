import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupportPage } from './support';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { ElasticModule } from 'ng-elastic';

@NgModule({
  declarations: [
    SupportPage,
  ],
  imports: [
    IonicPageModule.forChild(SupportPage),
    ComponentsModule,
    DirectivesModule,
    ElasticModule
  ],
  entryComponents: [
    SupportPage
  ]
})
export class SupportPageModule {}
