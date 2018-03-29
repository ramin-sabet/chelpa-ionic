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

  rsp: any;
  phoneNumber: number;
  profileName: string = '';
  toggleEventDetails = false;
  eventObject = '';
  userName: string = '';


  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth,
    navParams: NavParams, private storage: Storage,
    public eventSearch: EventSearchProvider, private eventsDetails: EventsDetailsProvider) {
    this.profileName = navParams.get('profileName');
  }

  ionViewDidLoad() {
    this.storage.get('phoneNumber').then((val) => {
      //   this.userInfo.phoneNumber = val;
    });
    this.storage.get('userId').then((val) => {
      //   this.userInfo.externalAppUserId = val;
    });
    this.storage.get('userName').then((val) => {
      // this.userName = val;
    });
  }

  addNewEvent() {
    this.navCtrl.push('AddNewEventPage');
  }

  sendCode(form) {

    this.afAuth.auth.signInWithPhoneNumber(form.value.phoneNumber, new firebase.auth.RecaptchaVerifier('re-container', {
      'size': 'invisible'
    })).then(data => {
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
    } else {
      this.eventsDetails.getDetails(event._id)
        .subscribe((result) => {
          this.navCtrl.push('DisplayEventPage', { result: result });
        })
    }
  }
}
