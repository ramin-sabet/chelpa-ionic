import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-display-event',
  templateUrl: 'display-event.html',
})
export class DisplayEventPage {

  eventObject : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eventObject = navParams.get('result');
    console.log(this.eventObject);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayEventPage');
  }

}
