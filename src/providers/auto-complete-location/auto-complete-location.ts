import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic2-auto-complete';


@Injectable()
export class AutoCompleteLocationProvider implements AutoCompleteService {

  modifiedData: any;
  labelAttribute = "description";
  apiKey = 'AIzaSyCbshc9GyX5Fp4QGQRm0G4qn4J8YzHLlqw';
  url = '/maps/api/place/autocomplete/';

  constructor(public http: HttpClient) {
    console.log('Hello AutoCompleteLocationProvider Provider');
  }

  getResults(keyword: string) {
    return this.http.get(this.url + `json?input=${keyword}&key=${this.apiKey}`)
      .map(
        result => {
          return result['predictions'];
        })
  }
}
