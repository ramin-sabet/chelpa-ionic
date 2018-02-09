import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-new-event',
  templateUrl: 'add-new-event.html',
})
export class AddNewEventPage {

  private newEvent: FormGroup;
  webkitReleased = '1998-11-04T11:06Z';
  tokyoTime: string;
  addInput = false;
  items: FormArray;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
    this.newEvent = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      time: ['', Validators.required],
      guestNumbers: ['', Validators.required],
      costs: ['0', Validators.required],
      items: this.formBuilder.array([this.createItem()])
    });

  }

  ionViewDidLoad() {
    this.items = this.newEvent.get('items') as FormArray;
    this.items.removeAt(0);
  }


  submitForm(value: any) {
    console.log(value);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addItem(e): void {
    this.items = this.newEvent.get('items') as FormArray;
    e.preventDefault();
    this.items.push(this.createItem());
  }

  removeItem(e, i): void {
    this.items = this.newEvent.get('items') as FormArray;
    e.preventDefault();
    this.items.removeAt(i);
  }
}
