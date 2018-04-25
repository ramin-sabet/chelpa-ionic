// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage';


// @Injectable()
// export class RideEngineProvider {

//   url = "http://localhost:3000/api/v1/";
//   returnedData: any;

//   constructor(public http: HttpClient, private storage: Storage) {
//     console.log('Hello EventEngineProvider Provider');
//   }

//   submitRide(eventId, param: any) {

//     this.storage.get('firebaseToken').then((val) => {
//       this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
//         .set('authorization', 'Bearer ' + val);
//     })

//     console.log(param);
//     this.http.put(this.url + `events/${eventId}`, param, { headers: this.returnedData }).subscribe(data => console.log(data));
//   }
// }
