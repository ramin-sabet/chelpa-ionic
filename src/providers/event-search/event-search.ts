import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class EventSearchProvider {

  labelAttribute = "name";
  formValueAttribute = "";
  url = 'http://localhost:3000/api/v1/';

  constructor(public http: HttpClient) {
    console.log('Hello EventSearchProvider Provider');
  }

  getResults(keyword: string) {
    return this.http.get<any>(this.url + `events?keyword=${keyword}&limit=2`)
      .map(result => {
        if (result.data.length === 0) {
          return [{ name: keyword, propertyId: 0 }]
        } else {
          console.log(result.data[0].name);
          return result.data
        }
      }
      )
  };
}
