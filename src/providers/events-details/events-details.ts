import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@Injectable()
export class EventsDetailsProvider {

  url = 'http://localhost:3000/api/v1/';
  returnedData: any;

  constructor(public http: HttpClient, private authService: AuthServiceProvider) {}

  getDetails(eventId: string): Observable<any> {

    this.authService.getTokenHeader().then((data) => {
      this.returnedData = data;
    })

    return this.http.get<any>(this.url + `events/${eventId}`, { headers: this.returnedData })
  }
}
