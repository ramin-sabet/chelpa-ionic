import { Component } from '@angular/core';
import { Storage} from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileInfoPage } from '../profile-info/profile-info'
import * as firebase from 'firebase';
import { UserAuthenticationProvider } from '../../providers/user-authentication/user-authentication';



@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {

  confirmationResult;
  code;

  userToken: any;
  MockReturn :any;

  userInfo: AppUserRegister = {
    phoneNumber: 6565,
    externalAppUserId: "AA4444",
    name: "Ramin",
    appID: "34343gf"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
    public userAth: UserAuthenticationProvider) {
    this.confirmationResult = this.navParams.get('confirmationResult');
      this.getMessages(this.userInfo);
  }

  getMessages(value:any){
    this.MockReturn = this.userAth.registerUser(this.userInfo)
    console.log(this.MockReturn);
    // .subscribe(data => { 
    //   console.log(data);
    //   this.userToken = data; });
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
