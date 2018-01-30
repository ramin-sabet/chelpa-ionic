import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChelpaHomePage } from '../chelpa-home/chelpa-home';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {

  confirmationResult;
  code;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.confirmationResult = this.navParams.get('confirmationResult');
  }


  verifyCode(form) {
    const credential = firebase.auth.PhoneAuthProvider.
      credential(this.confirmationResult.verificationId, form.value.code)
    firebase.auth().signInWithCredential(credential)
      .then(user => {
        console.log(user);
        this.navCtrl.setRoot('ChelpaHomePage');
      }).catch(err => {
        console.log(err);
      })
  }

}
