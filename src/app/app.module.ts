import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ChelpaHomePageModule } from '../pages/chelpa-home/chelpa-home.module';
import { CodePageModule } from '../pages/code/code.module';
import { ProfileInfoPageModule } from '../pages/profile-info/profile-info.module';
import { AddNewEventPageModule } from '../pages/add-new-event/add-new-event.module';
import { TermsAndConditionsPageModule } from '../pages/terms-and-conditions/terms-and-conditions.module';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import { UserAuthenticationProvider } from '../providers/user-authentication/user-authentication';
import { FieldOptionsProvider } from '../providers/field-options/field-options';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteLocationProvider } from '../providers/auto-complete-location/auto-complete-location';
import { EventEngineProvider } from '../providers/event-engine/event-engine';
import { EventSearchProvider } from '../providers/event-search/event-search';
import { EventsDetailsProvider } from '../providers/events-details/events-details';
import { ReviewPageModule } from '../pages/review/review.module';
import { UserProfilePageModule } from '../pages/user-profile/user-profile.module';
import { AvailableRidesProvider } from '../providers/available-rides/available-rides';
import { RideEngineProvider } from '../providers/ride-engine/ride-engine';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { TripProvider } from '../providers/trip/trip';

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
    // TermsAndConditionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    TermsAndConditionsPageModule,
    AngularFireAuthModule,
    ChelpaHomePageModule,
    CodePageModule,
    ProfileInfoPageModule,
    AddNewEventPageModule,
    HttpClientModule,
    ReviewPageModule,
    AngularFireDatabaseModule,
    UserProfilePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //  TermsAndConditionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserAuthenticationProvider,
    FieldOptionsProvider,
    AutoCompleteLocationProvider,
    EventEngineProvider,
    EventSearchProvider,
    EventsDetailsProvider,
    AvailableRidesProvider,
    RideEngineProvider,
    Camera,
    FileTransfer,
    TripProvider,
    TripProvider,
    TripProvider
  ]
})
export class AppModule { }
