import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';

/*
  Generated class for the UserAuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserAuthenticationProvider {

  MockArray = [{email: "a@a.com", ID:"23232" }];

  constructor(private http : HttpClient) {
    console.log('Hello UserAuthenticationProvider Provider');
  }

  registerUser(userInfo: any) {
     this.http.post('http://localhost:3000/auth/signup', userInfo);
    // .do(res => console.log(res));
    
    // return this.MockArray;
    // return this.http.post('http://shareitapp-kaveh.us-east-2.elasticbeanstalk.com/membership/loginapp?permanent=true', userInfo)
    // .do(res => console.log(res));
  }

}
