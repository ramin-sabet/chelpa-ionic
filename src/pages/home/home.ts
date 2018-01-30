import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  phoneNumber: any = '';

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {

  }

  sendCode(form) {
    this.afAuth.auth.signInWithPhoneNumber(form.value.phoneNumber, new firebase.auth.RecaptchaVerifier('re-container',{
      'size': 'invisible'
    })).then(data=> {this.navCtrl.push('codePage',{
      confirmationResult:data
    })
  }).catch(err=>{
      console.log(err);
    })
  }
}
