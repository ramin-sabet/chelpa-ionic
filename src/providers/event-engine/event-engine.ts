import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@Injectable()
export class EventEngineProvider {

  url = "http://localhost:3000/api/v1/events";
  returnedData: any;

  constructor(public http: HttpClient, private authService: AuthServiceProvider) {
    console.log('Hello EventEngineProvider Provider');
  }

  submitEvent(param: any) {

    this.authService.getTokenHeader().then((data) => {
      this.returnedData = data;
    })

    console.log(param);
    this.http.post(this.url, param, { headers: this.returnedData }).subscribe(data => console.log(data));
  }
}
