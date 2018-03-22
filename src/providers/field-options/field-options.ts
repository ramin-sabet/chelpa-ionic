import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic2-auto-complete';
import 'rxjs/add/operator/map';

@Injectable()
export class FieldOptionsProvider implements AutoCompleteService {

  modifiedData: any;
  labelAttribute = "name";
  formValueAttribute = "";
  url = 'http://localhost:3000/api/v1/';

  constructor(public http: HttpClient) {
    console.log('Hello FieldOptionsProvider Provider');
  }

  getResults(keyword: string) {
    return this.http.get<any>(this.url + `options?keyword=${keyword}&limit=3`)
      .map(result => { console.log(result);
        if (result.data.length === 0) {
          return [{ name: keyword, propertyId: 0 }]
        } else {
          return result.data;
        }
      }
      )
  };
}

