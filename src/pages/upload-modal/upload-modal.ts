import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserAuthenticationProvider } from '../../providers/user-authentication/user-authentication';
/**
 * Generated class for the UploadModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-modal',
  templateUrl: 'upload-modal.html',
})
export class UploadModalPage {
 
  imageData: any;
  desc: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
    private imagesProvider: UserAuthenticationProvider) {
    this.imageData = this.navParams.get('data');
  }

  saveImage() {
    this.imagesProvider.uploadImage(this.imageData, this.desc).then(res => {
      this.viewCtrl.dismiss({ reload: true });
    }, err => {
      this.dismiss();
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
