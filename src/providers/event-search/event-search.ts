import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class EventSearchProvider {

  labelAttribute = "name";
  formValueAttribute = "";
  url = 'http://shareit-sharetrip.193b.starter-ca-central-1.openshiftapps.com/';

  constructor(public http: HttpClient) {
    console.log('Hello EventSearchProvider Provider');
  }

  getResults(keyword: string) {
    return this.http.get<any>(this.url + `stories?story=${keyword}&take=2`)
      .map(result => {
        if (result.length === 0) {
          return [{ property: keyword, propertyId: 0 }]
        } else {
          return result
        }
      }
      )
  };
}
