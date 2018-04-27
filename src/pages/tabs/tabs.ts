import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { StreetsPage } from '../streets/streets';
import { OfflinePage } from '../offline/offline';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StreetsPage;
  tab3Root = OfflinePage;
  tab4Root = ProfilePage;

}
