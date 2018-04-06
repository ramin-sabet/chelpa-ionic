import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChelpaHomePage } from '../chelpa-home/chelpa-home';
import { Storage } from '@ionic/storage';
import { UserAuthenticationProvider } from '../../providers/user-authentication/user-authentication';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-profile-info',
  templateUrl: 'profile-info.html',
})
export class ProfileInfoPage {

  profileName: string = '';
  token = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public userAuth: UserAuthenticationProvider) {
  }

  ionViewDidLoad() {
  }

  async gotoHomePage() {
    let token = {};

    await firebase.auth().onAuthStateChanged(function (user) {
      if (user) {    
        token = user;
      } else {
        // No user is signed in.
      }
    });
   
    this.storage.remove('firebaseToken');
    this.storage.set('firebaseToken', token['pa']);
    this.userAuth.registerUser(token, this.profileName);

    this.navCtrl.setRoot('ChelpaHomePage');
    this.storage.set('userName', this.profileName);
  }

}
