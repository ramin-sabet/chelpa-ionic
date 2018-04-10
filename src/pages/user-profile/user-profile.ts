import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserAuthenticationProvider } from '../../providers/user-authentication/user-authentication';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  userInfo;
  creatorId;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userProfile: UserAuthenticationProvider, private storage: Storage) {
    this.storage.get('userId').then((val) => {
      this.creatorId = val;
    });
    this.userInfo = userProfile.getDetails(this.creatorId)
      .subscribe(data => console.log(data));
  }


}
