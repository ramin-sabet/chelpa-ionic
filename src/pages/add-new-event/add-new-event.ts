import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the AddNewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-event',
  templateUrl: 'add-new-event.html',
})
export class AddNewEventPage {

  private newEvent: FormGroup;
  webkitReleased = '1998-11-04T11:06Z';
  tokyoTime: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
      this.newEvent = this.formBuilder.group({
        name : ['', Validators.required],
        location : ['', Validators.required],
        time : ['', Validators.required],
        guestNumbers : ['', Validators.required],
        costs : ['0', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewEventPage');
  }

  submitForm(value :any){
    console.log(value);
  }

}
