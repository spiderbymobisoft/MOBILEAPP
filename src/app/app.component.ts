import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { FlurryAnalytics, FlurryAnalyticsObject, FlurryAnalyticsOptions } from '@ionic-native/flurry-analytics';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'LoginPage';

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    splashScreen: SplashScreen, keyboard: Keyboard,
    private flurryAnalytics: FlurryAnalytics,
    private oneSignal: OneSignal) {
    platform.ready().then(() => {
      //statusBar.styleDefault();
      statusBar.styleLightContent();
      splashScreen.hide();
      keyboard.disableScroll(true);
      keyboard.hideKeyboardAccessoryBar(true);
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.oneSignalInit();
      this.flurryAnalyticsInit();
    });

  }

  flurryAnalyticsInit() {
    const options: FlurryAnalyticsOptions = {
      appKey: '93WPPFW9TZGNTXC38KFS',
      reportSessionsOnClose: true,
      enableLogging: true
    };

    let fa: FlurryAnalyticsObject = this.flurryAnalytics.create(options);

    fa.logEvent('event name')
      .then(() => console.log('Logged an event!'))
      .catch(e => console.log('Error logging the event', e));
  }

  oneSignalInit() {
    this.oneSignal.startInit('a5e5f795-7339-4d1d-a428-30c48c31b864', '574599704839');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();
  }

}
