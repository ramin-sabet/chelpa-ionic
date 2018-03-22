import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EventsDetailsProvider {

  url = 'http://localhost:3000/api/v1/';

  constructor(public http: HttpClient) {
  }

  getDetails(eventId: string) {
    return this.http.get<any>(this.url +`events/${eventId}`)
}
}
