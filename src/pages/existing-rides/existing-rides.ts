import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-existing-rides',
  templateUrl: 'existing-rides.html',
})
export class ExistingRidesPage {

  rides;
  objectId;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {
    this.objectId = navParams.get('param1');
    this.rides = navParams.get('param2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExistingRidesPage');
  }


  more(item) {

  }

  delete(item) {

  }

  mute(item) {

  }

  archive(item) {

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

  showDetails(i) {
    console.log(i);
  }
}
