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
  token: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public userAuth: UserAuthenticationProvider) {
  }

  ionViewDidLoad() {
  }

  gotoHomePage() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("SENDCODE");
        console.log(user['pa']);
        this.token = user['pa'];
      } else {
        // No user is signed in.
      }
      console.log("SENDCODEdadadadadadadada");
      console.log(this.token);
      this.storage.set('firebaseToken', this.token);
    });

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
    console.log('ionViewDidLoad ProfileInfoPage');
    console.log(this.profileName);
    this.userAuth.registerUser(this.profileName);
    this.navCtrl.setRoot('ChelpaHomePage');
    this.storage.set('userName', this.profileName);
  }

}
