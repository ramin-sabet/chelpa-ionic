import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class EventEngineProvider {

  url = "http://localhost:3000/api/v1/events";
  returnedData: any;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello EventEngineProvider Provider');
  }

  submitEvent(param: any) {

    this.storage.get('firebaseToken').then((val) => {
      this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
        .set('authorization', 'Bearer ' + val);
    });


    console.log(param);
    this.http.post(this.url, param, { headers: this.returnedData }).subscribe(data => console.log(data));
  }
}
