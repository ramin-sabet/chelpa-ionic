import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { EventSearchProvider } from '../../providers/event-search/event-search';
import { EventsDetailsProvider } from '../../providers/events-details/events-details';


@IonicPage()
@Component({
  selector: 'page-chelpa-home',
  templateUrl: 'chelpa-home.html',
})
export class ChelpaHomePage {


  phoneNumber: number;
  profileName: string = '';
  toggleEventDetails = false;



  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth,
    navParams: NavParams, private storage: Storage,
    public eventSearch: EventSearchProvider, private eventsDetails: EventsDetailsProvider) {
    this.profileName = navParams.get('profileName');
  }

  ionViewDidLoad() {
    //this.userInfo['appID'] = "1:264292606260:android:334752b62c4bdab7";
    console.log(this.profileName);
    this.storage.get('phoneNumber').then((val) => {
      //   this.userInfo.phoneNumber = val;
    });
    this.storage.get('userId').then((val) => {
      //   this.userInfo.externalAppUserId = val;
    });
    this.storage.get('userName').then((val) => {
      //  this.userInfo.name = val;
    });
  }

  addNewEvent() {
    this.navCtrl.push('AddNewEventPage');
  }

  sendCode(form) {

    this.afAuth.auth.signInWithPhoneNumber(form.value.phoneNumber, new firebase.auth.RecaptchaVerifier('re-container', {
      'size': 'invisible'
    })).then(data => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          user.getIdToken().then(function (data) {
            console.log(data)
          });
        }
      });
      this.storage.set('phoneNumber', form.value.phoneNumber);
      this.navCtrl.push('CodePage', {
        confirmationResult: data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  getEvent(event) {
    if (event.propertyId == 0) {
      this.navCtrl.push('AddNewEventPage');
    }
    this.toggleEventDetails = !this.toggleEventDetails;
  }
  rideDetails() {
    this.navCtrl.push('RiderFormPage');
  }
}
