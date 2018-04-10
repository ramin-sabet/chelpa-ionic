import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-display-event',
  templateUrl: 'display-event.html',
})
export class DisplayEventPage {

  eventObject: any;
  rides: any[];
  arrayRides: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eventObject = navParams.get('result');
  }

  ionViewDidLoad() {
  }

  rideDetails() {
    this.navCtrl.push('RiderFormPage', {
      param1: this.eventObject
    });
  }

  async existingRides() {

    this.availableRides.getAsyncData(this.eventObject.data._id)
      .subscribe((data => {

        this.rides = data.data.rides;
        console.log(this.rides);
        for (var i = 0; i < this.rides.length; i++) {
          this.arrayRides.push({ 'From': this.rides[i].from, 'To': this.rides[i].to, 'creatorId': this.rides[i].creatorId, 'rideId' :this.rides[i]._id })
        }
      }));
    await this.navCtrl.push('ExistingRidesPage', {
      param1: this.eventObject.data._id,
      param2: this.arrayRides
    });
    this.arrayRides = [];
  }

}
