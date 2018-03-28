import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@Injectable()
export class EventSearchProvider {

  labelAttribute = "name";
  formValueAttribute = "";
  url = 'http://localhost:3000/api/v1/';
  returnedData: any;



  constructor(public http: HttpClient, public storage: Storage) { }

  getResults(keyword: string): Observable<any> {

    this.storage.get('firebaseToken').then((val) => {
      this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
        .set('authorization', 'Bearer ' + val);
      console.log(val);
      console.log(this.returnedData);
    });

    return this.http.get<any>(this.url + `events?keyword=${keyword}&limit=2`, { headers: this.returnedData })
      .map(result => {
        if (result.data.length === 0) {
          return [{ name: keyword, propertyId: 0 }]
        } else {
          console.log(result.data);
          return result.data
        }
      });
  }
}

