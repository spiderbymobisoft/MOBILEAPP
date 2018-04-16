import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { StreetsPage } from '../streets/streets';
import { PropertiesPage } from '../properties/properties';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StreetsPage;
  tab3Root = PropertiesPage;
  tab4Root = ProfilePage;

}
