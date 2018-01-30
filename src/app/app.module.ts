import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { ChelpaHomePageModule } from '../pages/chelpa-home/chelpa-home.module';
import { CodePageModule } from '../pages/code/code.module';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";

const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAVREAUgG53zTYKUGUYI81IZPq5g-205DI",
  authDomain: "chelpa-sms-verification.firebaseapp.com",
  databaseURL: "https://chelpa-sms-verification.firebaseio.com",
  projectId: "chelpa-sms-verification",
  storageBucket: "chelpa-sms-verification.appspot.com",
  messagingSenderId: "264292606260"
};

@NgModule({
  declarations: [
    MyApp,
    TermsAndConditionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ChelpaHomePageModule,
    CodePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TermsAndConditionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
