import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserAuthenticationProvider } from '../../providers/user-authentication/user-authentication';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  userInfo;
  creatorId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userProfile: UserAuthenticationProvider, private storage: Storage) {
    this.storage.get('userId').then((val) => {
      this.creatorId = val;
    });

  }
  ionViewDidLoad() {
    this.userProfile.getDetails(this.creatorId)
      .subscribe(data => {
        console.log(data);
        this.userInfo = {
          "id": data.data._id, "userName": data.data.userName, "gender": data.data.maleFemale, "interests": data.data.interests,
          "study": data.data.study, "studyField": data.data.studyField, "work": data.data.work, "workField": data.data.workField,
        }
      });
  }

  messageToJoin(){
    
  }

}