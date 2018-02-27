import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { AvailableRidesProvider } from '../../providers/available-rides/available-rides';


@IonicPage()
@Component({
  selector: 'page-existing-rides',
  templateUrl: 'existing-rides.html',
})
export class ExistingRidesPage {

  items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
    public actionsheetCtrl: ActionSheetController, public availableRides : AvailableRidesProvider) {
      this.items = availableRides.getDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExistingRidesPage');
  }

  doInfinite(infiniteScroll) {
    this.availableRides.getAsyncData().then((newData) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.push( newData[i] );
      }

      infiniteScroll.complete();

      if (this.items.length > 10) {
        infiniteScroll.enable(false);
      }
    });
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

  showDetails(i){
    console.log(i);
  }
}
