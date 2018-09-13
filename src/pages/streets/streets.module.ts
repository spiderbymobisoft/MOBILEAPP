import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetsPage } from './streets';
import { SearchPipe } from '../../pipes/search.pipe';

@NgModule({
  declarations: [
    StreetsPage,
    SearchPipe
  ],
  imports: [
    IonicPageModule.forChild(StreetsPage),
  ],
})
export class StreetsPageModule {}
