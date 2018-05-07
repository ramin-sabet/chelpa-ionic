import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';

/**
 * Generated class for the PhoneConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-confirmation',
  templateUrl: 'phone-confirmation.html',
})
export class PhoneConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afAuth: AngularFireAuth, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneConfirmationPage');
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
