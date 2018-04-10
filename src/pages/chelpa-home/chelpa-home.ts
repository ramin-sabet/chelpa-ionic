import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AutoCompleteLocationProvider } from '../../providers/auto-complete-location/auto-complete-location';
import * as firebase from 'firebase';
import { EventSearchProvider } from '../../providers/event-search/event-search';
import { EventsDetailsProvider } from '../../providers/events-details/events-details';
import { TripProvider } from '../../providers/trip/trip';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-chelpa-home',
  templateUrl: 'chelpa-home.html',
})
export class ChelpaHomePage {

  private rideDetails: FormGroup;
  rsp: any;
  phoneNumber: number;
  profileName: string = '';
  toggleEventDetails = false;
  eventObject = '';
  userName: string = '';
  toggleOption: boolean = false;
  tripObject = {};
  creatorId;


  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth,
    navParams: NavParams, private storage: Storage, private formBuilder: FormBuilder,
    public eventSearch: EventSearchProvider, private eventsDetails: EventsDetailsProvider,
    public autoComplete: AutoCompleteLocationProvider, private tripProvider: TripProvider,
    private alertCtrl: AlertController) {
    this.storage.get('userId').then((val) => {
      this.creatorId = val;
    });
    this.profileName = navParams.get('profileName');
    this.rideDetails = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      time: ['', Validators.required],
      transportationOption: ['', Validators.required],
      price: ['0', Validators.required],
      guestNumbers: ['0', Validators.required],
    });
  }

  toggle(transportationOption) {
    if (transportationOption == 'drive') {
      this.toggleOption = true;
    } else {
      this.toggleOption = false;
    }
  }

  submitForm(value: any) {
    this.tripObject = {
      "creatorId": this.creatorId, "from": value.from, "to": value.to, "time": value.time,
      "transportationOption": value.transportationOption, "price": value.price, "guestNumbers": value.guestNumbers
    }
    let confirm = this.alertCtrl.create({
      title: `You are about to submit the following ride!`,
      message: `The ride from ${value.from} to ${value.to} at ${value.time}?`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            let alert = this.alertCtrl.create({
              title: 'Cancelled!',
              subTitle: 'You have cancelled your request to add a new trip!',
              buttons: ['OK']
            });
            alert.present();
          }
        },
        {
          text: 'Submit',
          handler: () => {
            this.tripProvider.submitTrip(this.tripObject);
            let alert = this.alertCtrl.create({
              title: 'Submitted!',
              subTitle: 'You may now proceed to be connected with people with same destination!',
              buttons: ['OK']
            });
            alert.present();
            this.navCtrl.push('ExistingRidesPage');
          }
        }
      ]
    });
    confirm.present();

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

  editProfile(){
    this.navCtrl.push('EditProfilePage');
  }

  // addNewEvent() {
  //   this.navCtrl.push('AddNewEventPage');
  // }

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
