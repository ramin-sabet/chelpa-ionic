import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { ChelpaHomePage } from '../chelpa-home/chelpa-home';
import { Storage } from '@ionic/storage';
import { UserAuthenticationProvider } from '../../providers/user-authentication/user-authentication';
import * as firebase from 'firebase';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-profile-info',
  templateUrl: 'profile-info.html',
})
export class ProfileInfoPage {

  profileName: string = '';
  token = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public userAuth: UserAuthenticationProvider, private actionSheetController: ActionSheetController,
    private camera: Camera, private modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetController.create({
      title: 'Select image source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  takePicture(sourceType) {
    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }
    this.camera.getPicture(options).then(imagePath => {
      let modal = this.modalCtrl.create('UploadModalPage', { data: imagePath });
      modal.present();
      modal.onDidDismiss(data => {
        if (data && data.reload) {

        }
      });
    }, err => {
      console.log('Error: ', err);
    })
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
