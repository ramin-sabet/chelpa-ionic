import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-chelpa-home',
  templateUrl: 'chelpa-home.html',
})
export class ChelpaHomePage{


  phoneNumber: number;
  profileName: string = '';
  
  

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth,
    navParams: NavParams, private storage: Storage) {
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
}
