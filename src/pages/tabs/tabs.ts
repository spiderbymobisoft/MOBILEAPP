import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'StreetsPage';
  tab3Root = 'OfflinePage';
  tab4Root = 'NotificationsPage';
  tab5Root = 'ProfilePage';

}
