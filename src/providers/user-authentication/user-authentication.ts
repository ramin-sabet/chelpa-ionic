import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserAuthenticationProvider {

  url = 'http://localhost:3000/api/v1/';
  returnedData;

  constructor(private http: HttpClient, private storage: Storage) {
    console.log('Hello UserAuthenticationProvider Provider');
  }

  async registerUser(userInfo: any) {
    await console.log("NOW");

    await this.storage.get('firebaseToken').then((val) => {
      this.returnedData = val;
      console.log(this.returnedData)
    })
    await this.http.post<any>(this.url + `users`, userInfo, { headers: this.returnedData })
      .subscribe(result => { console.log("POST"); console.log(result) });
  }

}
