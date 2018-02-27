import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AvailableRidesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvailableRidesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AvailableRidesProvider Provider');
  }

  getDetails(): any[] {
    {
      // return mock data synchronously
      let data: any[] = [];
      for (var i = 0; i < 20; i++) {
        data.push( this._getRandomData() );
      }
      return data;
    }
  }

  getAsyncData(): Promise<any[]> {
    // async receive mock data
    return new Promise(resolve => {

      setTimeout(() => {
        resolve(this.getDetails());
      }, 1000);

    });
  }

  private _getRandomData() {
    let i = Math.floor( Math.random() * this._data.length );
    return this._data[i];
  }

  private _data =[{name : "Ramin", address :"225VanHorne"}, {name : "Kaveh", address : "Downtown"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"},
  {name : "ARIF", address:"225VanHorne"}];
}
