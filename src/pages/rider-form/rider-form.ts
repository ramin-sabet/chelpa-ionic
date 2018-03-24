import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AutoCompleteLocationProvider } from '../../providers/auto-complete-location/auto-complete-location';
import { FieldOptionsProvider } from '../../providers/field-options/field-options';
import { RideEngineProvider } from '../../providers/ride-engine/ride-engine';


@IonicPage()
@Component({
  selector: 'page-rider-form',
  templateUrl: 'rider-form.html',
})
export class RiderFormPage {

  private rideDetails: FormGroup;
  items: FormArray;
  properties: any = [];
  eventObject;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public autoComplete: AutoCompleteLocationProvider, public fieldOption: FieldOptionsProvider,
    public riderEngine: RideEngineProvider) {
    this.rideDetails = this.formBuilder.group({
      From: ['', Validators.required],
      To: ['', Validators.required],
      time: ['', Validators.required],
      guestNumbers: ['', Validators.required],
      costs: ['0', Validators.required],
      items: this.formBuilder.array([this.createItem()])
    });
    this.eventObject = navParams.get('param1');
    console.log(this.eventObject.data._id);
  }

  ionViewDidLoad() {
    this.items = this.rideDetails.get('items') as FormArray;
    this.items.removeAt(0);
  }

  submitForm(value: any) {
    // this.properties = [];
    // if (value.items.length == 0) {
    //   this.properties = [];
    // }
    // else {
    //   for (var i = 0; i < value.items.length; i++) {
    //     if (value.items[i].propertyId.propertyId == '0') {
    //       this.properties.push({ property: value.items[i].propertyId.property, value: value.items[i].description });
    //     } else {
    //       this.properties.push({ propertyId: value.items[i].propertyId.propertyId, value: value.items[i].description });
    //     }
    //   }
    // }
    let ride = {
      "creatorId": "1",
      "From": value.From,
      "To": value.To,
      "time": value.time,
      "guestNumbers": value.guestNumbers,
      "costs": value.costs,
      "properties": this.properties
    };
    this.riderEngine.submitRide(this.eventObject.data._id, ride);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      propertyId: [''],
      description: ['', Validators.required]
    });
  }

  addItem(e): void {
    this.items = this.rideDetails.get('items') as FormArray;
    e.preventDefault();
    this.items.push(this.createItem());
  }

  removeItem(e, i): void {
    this.items = this.rideDetails.get('items') as FormArray;
    e.preventDefault();
    this.items.removeAt(i);
  }

}
