import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';


@Injectable()
export class EventsDetailsProvider {

  url = 'http://localhost:3000/api/v1/';
  returnedData;

  constructor(public http: HttpClient, private storage: Storage) { }

  joinRide (eventId, joinedPerson) {

    this.storage.get('firebaseToken').then((val) => {
      this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
        .set('authorization', 'Bearer ' + val);
    })

    this.http.put(this.url + `events/rides/${eventId}`, joinedPerson, { headers: this.returnedData }).subscribe(data => console.log(data));
  }

  getDetails(eventId: string): Observable<any> {

    this.storage.get('firebaseToken').then((val) => {
      this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
        .set('authorization', 'Bearer ' + val);
    });

    // this.authService.getTokenHeader().then((data) => {
    //   this.returnedData = data;
    // })

    return this.http.get<any>(this.url + `events/${eventId}`, { headers: this.returnedData })
  }
}
