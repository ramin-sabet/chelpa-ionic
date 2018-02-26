import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic2-auto-complete';
import 'rxjs/add/operator/map';

@Injectable()
export class FieldOptionsProvider implements AutoCompleteService {

  modifiedData: any;
  labelAttribute = "property";
  formValueAttribute = "";
  url = 'http://shareit-sharetrip.193b.starter-ca-central-1.openshiftapps.com/';

  constructor(public http: HttpClient) {
    console.log('Hello FieldOptionsProvider Provider');
  }

  getResults(keyword: string) {
    return this.http.get<any>(this.url + `stories/propertynames?property=${keyword}&take=5`)
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
