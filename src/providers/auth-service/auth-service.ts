import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  getTokenHeader() {
    return firebase.auth().currentUser.getIdToken()
      .then(token => {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
          .set('authorization', 'Bearer ' + token);
        return headers;
      });
  }

}


