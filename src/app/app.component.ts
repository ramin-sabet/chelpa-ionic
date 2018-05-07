import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { ChelpaHomePage } from '../pages/chelpa-home/chelpa-home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = ChelpaHomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

