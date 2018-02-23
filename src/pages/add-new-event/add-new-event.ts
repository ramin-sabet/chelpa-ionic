import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FieldOptionsProvider } from '../../providers/field-options/field-options';
import { AutoCompleteLocationProvider } from '../../providers/auto-complete-location/auto-complete-location';
import { EventEngineProvider } from '../../providers/event-engine/event-engine';
import { Storage } from '@ionic/storage';

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
  creatorId;
  properties: any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public fieldOption: FieldOptionsProvider,
    public autoComplete: AutoCompleteLocationProvider,
    public eventEngine: EventEngineProvider, private storage: Storage) {
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
    this.storage.get('userId').then((val) => {
      this.creatorId = val;
    });
  }


  submitForm(value: any) {
    this.properties=[];
    console.log(value);
    if (value.items.length == 0) {
      this.properties = [];
    }
    else {
      for (var i = 0; i < value.items.length; i++) {
        if (value.items[i].propertyId.propertyId == '0') {
          this.properties.push({ property: value.items[i].propertyId.property, value: value.items[i].description });
        } else {
          this.properties.push({ propertyId: value.items[i].propertyId.propertyId, value: value.items[i].description });
        }
      }
    }
    let event = {
      "creatorId": "1",
      "name": value.name,
      "time": value.time,
      "price": value.costs,
      "location": value.location,
      "capacity": value.guestNumbers,
      "properties": this.properties
    };
    this.eventEngine.submitEvent(event);
    // console.log(event);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      propertyId: [''],
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
