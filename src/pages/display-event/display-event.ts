import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvailableRidesProvider } from '../../providers/available-rides/available-rides';




@IonicPage()
@Component({
  selector: 'page-display-event',
  templateUrl: 'display-event.html',
})
export class DisplayEventPage {

  eventObject: any;
  rides: any[];
  arrayRides: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public availableRides: AvailableRidesProvider) {
    this.eventObject = navParams.get('result');
  }

  ionViewDidLoad() {
  }

  rideDetails() {
    this.navCtrl.push('RiderFormPage', {
      param1: this.eventObject
    });
  }

  existingRides() {
    this.availableRides.getAsyncData(this.eventObject.data._id)
      .subscribe((data => {
        this.rides = data.data.rides;
        console.log(this.rides);
        for (var i = 0; i < this.rides.length; i++) {
          this.arrayRides.push({ 'From': this.rides[i].from, 'To': this.rides[i].to })
        }
      }));
    this.navCtrl.push('ExistingRidesPage', {
      param1: this.eventObject.data._id,
      param2: this.arrayRides
    });
  }

}
