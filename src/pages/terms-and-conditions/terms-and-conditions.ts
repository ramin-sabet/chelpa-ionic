import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChelpaHomePage } from '../chelpa-home/chelpa-home';
import { CodePage } from '../code/code';


@IonicPage()
@Component({
  selector: 'page-terms-and-conditions',
  templateUrl: 'terms-and-conditions.html',
})
export class TermsAndConditionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsAndConditionsPage');
  }

  gotoHomePage() {
    this.navCtrl.push('ChelpaHomePage');
  }

}
