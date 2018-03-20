import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class EventEngineProvider {

  url = "http://localhost:3000/api/v1/events";

  constructor(public http: HttpClient) {
    console.log('Hello EventEngineProvider Provider');
  }

  submitEvent (param : any ){
    console.log(param);
    this.http.post(this.url, param).subscribe(data => console.log(data) );
  }
}
