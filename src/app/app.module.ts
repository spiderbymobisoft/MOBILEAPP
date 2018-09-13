import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';

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
import { FormConfig } from '../app.services/store/form.config';
import { WhatThreeWordsService } from '../app.services/wtw/wtw.service';
import { Device } from '@ionic-native/device';
import { OneSignal } from '@ionic-native/onesignal';
import { BSNStore } from '../app.services/store/bsn.store';

const __app_components__: any[] = [
  MyApp
];
@NgModule({
  declarations: [...__app_components__],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md',// TODO: to have same iOS look for iOS platforms
      backButtonText: ''
    }),
    IonicStorageModule.forRoot()
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
    Store, BSNStore,
    FormConfig,
    StatusBar,
    SplashScreen,
    Keyboard,
    Geolocation, WhatThreeWordsService, Device,
    ScreenOrientation, Camera, FlurryAnalytics, OneSignal,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
