import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class EventEngineProvider {

  url = "http://shareit-sharetrip.193b.starter-ca-central-1.openshiftapps.com/stories";

  constructor(public http: HttpClient) {
    console.log('Hello EventEngineProvider Provider');
  }

  submitEvent (param : any ){
  //  console.log(param);
    this.http.post(this.url, param).subscribe(data => console.log(data) );
  }
}
