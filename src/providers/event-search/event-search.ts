import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventSearchProvider {

  labelAttribute = "name";
  formValueAttribute = "";
  url = 'http://localhost:3000/api/v1/';

  constructor(public http: HttpClient) {

  }

  getResults(keyword: string) {
    return this.http.get<any>(this.url + `events?keyword=${keyword}&limit=2`)
      .map(result => {
        if (result.data.length === 0) {
          return [{ name: keyword, propertyId: 0 }]
        } else {
          console.log(result.data);
          return result.data
        }
      }
      )
  };
}
