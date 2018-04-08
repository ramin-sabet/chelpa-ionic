import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { UserAuthenticationProvider } from '../../providers/user-authentication/user-authentication';


@IonicPage()
@Component({
  selector: 'page-existing-rides',
  templateUrl: 'existing-rides.html',
})
export class ExistingRidesPage {

  user: any;

  rides;
  objectId;
  userInfo: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
    public actionsheetCtrl: ActionSheetController, private userDetails: UserAuthenticationProvider) {
    this.objectId = this.navParams.get('param1');
    this.rides = this.navParams.get('param2');
  }


  more(item) {
    console.log(item);
    console.log(this.rides);
  }

  delete(item) {

  }

  mute(item) {

  }

  download(item) {

  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'SORTED BY',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Price',
          icon: !this.platform.is('ios') ? 'cash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Time',
          icon: !this.platform.is('ios') ? 'clock' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Rating',
          icon: !this.platform.is('ios') ? 'star-half' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  async showDetails(user) {

    await this.userDetails.getDetails(user.creatorId)
      .subscribe((data => {
        console.log("JKL");
        console.log(data.data);
        this.user = ({ "createdAt": data.data.createdAt, "phoneNumber": data.data.phoneNumber, "userName": data.data.userName })
        this.navCtrl.push('UserProfilePage', {
          param1: this.user
        });
      }));
  }
}