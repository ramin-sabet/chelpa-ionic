import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChelpaHomePage } from '../chelpa-home/chelpa-home';
import { Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile-info',
  templateUrl: 'profile-info.html',
})
export class ProfileInfoPage {

  profileName :string ='';

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileInfoPage');
  }

  gotoHomePage() {
    this.navCtrl.setRoot('ChelpaHomePage');
    this.storage.set('userName', this.profileName);
  }

}
