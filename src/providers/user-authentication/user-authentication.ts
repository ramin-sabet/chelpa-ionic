import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserAuthenticationProvider {

  url = 'http://localhost:3000/api/v1/';
  returnedData;
  user: any = {};

  constructor(private http: HttpClient, private storage: Storage) {

  }

  registerUser(token, profileName) {
    this.user.userId = token['uid'];
    this.user.userName = profileName;
    this.user.phoneNumber = token['phoneNumber'];

    console.log('Hello UserAuthenticationProvider Provider');
    console.log(this.user);
    


    this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
      .set('authorization', 'Bearer ' + token['pa']);
    console.log(this.returnedData)

    this.http.post<any>(this.url + `users`, this.user, { headers: this.returnedData })
      .subscribe(result => { console.log("POST"); console.log(result) });
  }

}
