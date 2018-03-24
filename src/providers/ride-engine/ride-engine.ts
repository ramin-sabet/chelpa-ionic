import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@Injectable()
export class RideEngineProvider {

  url = "http://localhost:3000/api/v1/";
  returnedData: any;

  constructor(public http: HttpClient, private authService: AuthServiceProvider) {
    console.log('Hello EventEngineProvider Provider');
  }

  submitRide(eventId, param: any) {

    this.authService.getTokenHeader().then((data) => {
      this.returnedData = data;
    })

    console.log(param);
    this.http.put(this.url + `events/${eventId}`, param, { headers: this.returnedData }).subscribe(data => console.log(data));
  }
}
