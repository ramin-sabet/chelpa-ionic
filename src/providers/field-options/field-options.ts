// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { AutoCompleteService } from 'ionic2-auto-complete';
// import { Storage } from '@ionic/storage';

// @Injectable()
// export class FieldOptionsProvider implements AutoCompleteService {

//   returnedData: any;
//   labelAttribute = "name";
//   formValueAttribute = "";
//   url = 'http://localhost:3000/api/v1/';

//   constructor(public http: HttpClient, private storage: Storage) {

//   }

//   getResults(keyword: string) {

//     this.storage.get('firebaseToken').then((val) => {
//       this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
//         .set('authorization', 'Bearer ' + val);
//     })

//     return this.http.get<any>(this.url + `options?keyword=${keyword}&limit=3`, { headers: this.returnedData })
//       .map(result => {

//         if (result.data.length === 0) {
//           return [{ name: keyword, propertyId: 0 }]
//         } else {
//           return result.data;
//         }
//       })
//   }
// }
