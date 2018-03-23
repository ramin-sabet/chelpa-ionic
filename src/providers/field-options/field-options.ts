import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AutoCompleteService } from 'ionic2-auto-complete';

@Injectable()
export class FieldOptionsProvider implements AutoCompleteService {

  returnedData: any;
  labelAttribute = "name";
  formValueAttribute = "";
  url = 'http://localhost:3000/api/v1/';

  constructor(public http: HttpClient, public authService: AuthServiceProvider) {
    
  }

  getResults(keyword: string) {

    this.authService.getTokenHeader().then((data) => {
      this.returnedData = data;
    })

    return this.http.get<any>(this.url + `options?keyword=${keyword}&limit=3`, { headers: this.returnedData })
      .map(result => {
        console.log("HI00");
        console.log(result);
        if (result.data.length === 0) {
          return [{ name: keyword, propertyId: 0 }]
        } else {
          return result.data;
        }
      })
  }
}

