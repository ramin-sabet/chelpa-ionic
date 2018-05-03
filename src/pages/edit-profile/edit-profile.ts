import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { UserAuthenticationProvider } from '../../providers/user-authentication/user-authentication';


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  toggleStudy: boolean = false;
  toggleWork: boolean = false;
  private profileDetails: FormGroup;
  creatorId: String;
  userName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private storage: Storage, private alertCtrl: AlertController, private userDetails: UserAuthenticationProvider) {
    this.storage.get('userId').then((val) => {
      this.creatorId = val;
    });
    this.storage.get('userName').then((val) => {
      this.userName = val;
    });
    this.profileDetails = this.formBuilder.group({
      maleFemale: ['', Validators.required],
      studyWork: ['', Validators.required],
      study: ['', Validators.required],
      studyField: ['', Validators.required],
      work: ['', Validators.required],
      workField: ['', Validators.required],
      interests: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  submitForm(profileDetails) {
    let userProfile = {
      "maleFemale": profileDetails.maleFemale,
      "studyWork": profileDetails.studyWork,
      "study": profileDetails.study,
      "studyField": profileDetails.studyField,
      "work": profileDetails.work,
      "workField": profileDetails.workField,
      "interests": profileDetails.interests,
    };
    let confirm = this.alertCtrl.create({
      title: `${this.userName}`,
      message: `You are about to update your profile!`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            let alert = this.alertCtrl.create({
              title: 'Cancelled!',
              subTitle: 'You have cancelled your request to edit your profile!',
              buttons: ['OK']
            });
            alert.present();
          }
        },
        {
          text: 'Accept',
          handler: () => {
            this.userDetails.updateUser(this.creatorId, userProfile);
            this.navCtrl.push('ChelpaHomePage');
          }
        }
      ]
    });
    confirm.present();
    console.log(profileDetails);
  }

  toggle(studyWork) {
    if (studyWork == 'study') {
      this.toggleStudy = true;
      this.toggleWork = false;
    } else if (studyWork == 'work') {
      this.toggleWork = true;
      this.toggleStudy = false;
    } else {
      this.toggleStudy = false;
      this.toggleWork = false;
    }
  }

}
