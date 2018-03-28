import { Component } from '@angular/core';
import { Storage} from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileInfoPage } from '../profile-info/profile-info'
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {

  confirmationResult;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.confirmationResult = this.navParams.get('confirmationResult');
  }


  verifyCode(form) {
    const credential = firebase.auth.PhoneAuthProvider.
      credential(this.confirmationResult.verificationId, form.value.code)
    firebase.auth().signInWithCredential(credential)
      .then(user => {
        this.storage.set('userId', user.uid); 
        this.navCtrl.push('ProfileInfoPage');
      }).catch(err => {
        console.log(err);
      })
  }

}
