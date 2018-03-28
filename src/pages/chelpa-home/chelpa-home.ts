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
    //this.userInfo['appID'] = "1:264292606260:android:334752b62c4bdab7";
    console.log(this.profileName);
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
      // firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
      //   console.log("SENDCODE");
      //   console.log(idToken);
      //   this.storage.set('firebaseToken', idToken);

      //   // this.rsp.writeHead(200, {"Content-Type": "application/json"});
      //   // this.rsp.end(JSON.stringify({token:token})); 
      // }).catch((err) => {
      //   // this.rsp.writeHead(500, {"Content-Type": "application/json"});
      //   // this.rsp.end(JSON.stringify({error:err}));
      // });

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
