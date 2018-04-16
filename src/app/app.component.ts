import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { FlurryAnalytics, FlurryAnalyticsObject, FlurryAnalyticsOptions } from '@ionic-native/flurry-analytics';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
 
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, private screenOrientation: ScreenOrientation, splashScreen: SplashScreen, keyboard: Keyboard,
    private flurryAnalytics: FlurryAnalytics) {
    platform.ready().then(() => {
      //statusBar.styleDefault();
      statusBar.styleLightContent();
      splashScreen.hide();
      keyboard.disableScroll(true);
      keyboard.hideKeyboardAccessoryBar(true);
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.flurryAnalyticsInit();
    });

  }

  flurryAnalyticsInit(){
    const options: FlurryAnalyticsOptions = {
      appKey: 'NGMXFHK363CTJ8QMN94T', 
      reportSessionsOnClose: true,
      enableLogging: true
     };
     
     let fa: FlurryAnalyticsObject = this.flurryAnalytics.create(options);
     
     fa.logEvent('event name')
       .then(() => console.log('Logged an event!'))
       .catch(e => console.log('Error logging the event', e));
  }


}