import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AvailableRidesProvider {

  url = 'http://localhost:3000/api/v1/';
  returnedData;
  tripId: string = '';

  constructor(public http: HttpClient, private storage: Storage) {

  }

  limitedResult(tripId, limitedData) {
    console.log(limitedData);
    this.storage.get('firebaseToken').then((val) => {
      this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
        .set('authorization', 'Bearer ' + val);
    });
    return this.http.get<any>(this.url + `trips/${tripId}/${limitedData.timeLimit}/${limitedData.originLimit}/${limitedData.destinationLimit}`, { headers: this.returnedData });
  }



  getAsyncData(tripId) {
    this.storage.get('firebaseToken').then((val) => {
      this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
        .set('authorization', 'Bearer ' + val);
    });
    return this.http.get<any>(this.url + `trips/${tripId}/60/1/1`, { headers: this.returnedData });

  }
}

