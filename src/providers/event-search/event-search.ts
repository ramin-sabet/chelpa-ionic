import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Injectable()
export class EventSearchProvider {

  labelAttribute = "name";
  formValueAttribute = "";
  url = 'http://localhost:3000/api/v1/';
  returnedData: any;



  constructor(public http: HttpClient, private authService: AuthServiceProvider) {}

  getResults(keyword: string): Observable<any> {
    
    this.authService.getTokenHeader().then((data) => {
      this.returnedData = data;
    })

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

