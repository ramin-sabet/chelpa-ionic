import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic2-auto-complete';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class FieldOptionsProvider implements AutoCompleteService {

  labelAttribute = "name";
  url = 'http://shareit-sharetrip.193b.starter-ca-central-1.openshiftapps.com/';

  constructor(public http: HttpClient) {
    console.log('Hello FieldOptionsProvider Provider');
  }

  getResults(keyword:string) {
    return this.http.get(this.url+`stories/propertynames?property=${keyword}&take=5"`)
    .map(
        result =>
        {
          return result.filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
        })
  }
}
