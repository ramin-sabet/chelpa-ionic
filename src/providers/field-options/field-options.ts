import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic2-auto-complete';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class FieldOptionsProvider implements AutoCompleteService {

  labelAttribute = "name";

  constructor(public http: HttpClient) {
    console.log('Hello FieldOptionsProvider Provider');
  }

  getResults(keyword:string) {
    return this.http.get("https://restcountries.eu/rest/v1/name/"+keyword)
    .map(
        result =>
        {
          return result.filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
        })
  }
}
