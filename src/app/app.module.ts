import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard';
import { HttpModule } from '@angular/http';
import { ComponentsModule } from '../components/components.module';
import { ElasticModule } from 'ng-elastic';
import { DirectivesModule } from '../directives/directives.module';
import { MomentModule } from 'angular2-moment';
import { Geolocation } from '@ionic-native/geolocation';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreateService } from '../app.services/http/crud/create.services';
import { RetrieveService } from '../app.services/http/crud/retrieve.services';
import { UpdateService } from '../app.services/http/crud/update.services';
import { DeleteService } from '../app.services/http/crud/delete.services';
import { APIConfig } from '../app.services/apiconfig/api.config';
import { SharedServices } from '../app.services/library/shared.services';
import { NigeriaStatesService } from '../app.services/locations/nigeria.states.service';
import { Store } from '../app.services/store/data.store';
import { AuthenticationService } from '../app.services/http/authentication/auth.service';
import { Camera } from '@ionic-native/camera';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { FlurryAnalytics } from '@ionic-native/flurry-analytics';
import { StreetsPage } from '../pages/streets/streets';
import { NewStreetPage } from '../pages/new-street/new-street';
import { PropertiesPage } from '../pages/properties/properties';
import { NewPropertyPage } from '../pages/new-property/new-property';
import { SecurityPage } from '../pages/security/security';
import { SupportPage } from '../pages/support/support';
import { FormConfig } from '../app.services/store/form.config';
import { StreetPage } from '../pages/street/street';
import { PropertyPage } from '../pages/property/property';
import { PropertyPhotoPage } from '../pages/property-photo/property-photo';
import { StreetPhotoPage } from '../pages/street-photo/street-photo';
import { WhatThreeWordsService } from '../app.services/wtw/wtw.service';
import { EntityPage } from '../pages/entity/entity';
import { EntitiesPage } from '../pages/entities/entities';
import { NewEntityPage } from '../pages/new-entity/new-entity';
import { EntityPhotoPage } from '../pages/entity-photo/entity-photo';
import { SelectStreetPage } from '../pages/select-street/select-street';
import { StreetPropertiesPage } from '../pages/street-properties/street-properties';
import { StreetsOfflinePage } from '../pages/streets-offline/streets.offline';
import { StreetPropertiesOfflinePage } from '../pages/street-properties-offline/street.properties.offline';
import { PropertiesOfflinePage } from '../pages/properties-offline/properties.offline';
import { EntitiesOfflinePage } from '../pages/entities-offline/entities.offline';
import { StreetOfflinePage } from '../pages/street-offline/street.offline';
import { EntityOfflinePage } from '../pages/entity-offline/entity.offline';
import { PropertyOfflinePage } from '../pages/property-offline/property.offline';
import { OfflinePage } from '../pages/offline/offline';
import { EntitiesOfflineAllPage } from '../pages/entities-offline-all/entities.offline.all';

const __app_components__: any[] = [
  MyApp,
  TabsPage,
  LoginPage,
  MenuPage,
  HomePage,
  ProfilePage,
  StreetsPage,
  StreetsOfflinePage,
  StreetPropertiesOfflinePage,
  PropertiesOfflinePage,
  EntitiesOfflinePage,
  StreetOfflinePage,
  EntityOfflinePage,
  PropertyOfflinePage,
  NewStreetPage,
  PropertiesPage,
  NewPropertyPage,
  SecurityPage,
  SupportPage,
  StreetPage,
  StreetPhotoPage,
  PropertyPage,
  PropertyPhotoPage,
  EntityPage,
  EntitiesPage,
  NewEntityPage,
  EntityPhotoPage,
  SelectStreetPage,
  StreetPropertiesPage,
  OfflinePage,
  EntitiesOfflineAllPage
];
@NgModule({
  declarations: __app_components__,
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    DirectivesModule,
    ElasticModule,
    MomentModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md',// TODO: to have same iOS look for iOS platforms
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: __app_components__
  ,
  providers: [
    APIConfig,
    AuthenticationService,
    CreateService,
    RetrieveService,
    UpdateService,
    DeleteService,
    NigeriaStatesService,
    SharedServices,
    Store,
    FormConfig,
    StatusBar,
    SplashScreen,
    Keyboard,
    Geolocation, WhatThreeWordsService,
    ScreenOrientation, Camera, FlurryAnalytics, 
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
