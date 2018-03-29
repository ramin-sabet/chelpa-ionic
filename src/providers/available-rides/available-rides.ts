import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class AvailableRidesProvider {

  url = 'http://localhost:3000/api/v1/events/';
  returnedData;
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello AvailableRidesProvider Provider');
  }
  getAsyncData(eventId) {
    this.storage.get('firebaseToken').then((val) => {
      this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
        .set('authorization', 'Bearer ' + val);
    });
    return this.http.get<any>(this.url + `rides/${eventId}`, { headers: this.returnedData });

  }
}

