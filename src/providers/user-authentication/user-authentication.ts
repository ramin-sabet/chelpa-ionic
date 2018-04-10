import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer';

@Injectable()
export class UserAuthenticationProvider {

  url = 'http://localhost:3000/api/v1/';
  returnedData;
  user: any = {};

  constructor(private http: HttpClient, private storage: Storage,
    private transfer: FileTransfer) {

  }

  updateUser(userId, updatedDetails) {

    this.storage.get('firebaseToken').then((val) => {
      this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
        .set('authorization', 'Bearer ' + val);
    });

    this.http.put<any>(this.url + `users/$userId`, updatedDetails, { headers: this.returnedData })
      .subscribe(result => { console.log("Put"); console.log(result) });
  }

  getDetails(userId: string) {

    this.storage.get('firebaseToken').then((val) => {
      this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
        .set('authorization', 'Bearer ' + val);
    });

    return this.http.get<any>(this.url + `users/${userId}`, { headers: this.returnedData })
  }

  uploadImage(img, desc): any {

    // // Destination URL
    // let url = this.apiURL + 'images';

    // // File for Upload
    var targetPath = img;

    var options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      params: { 'desc': desc }
    };
  }

  registerUser(token, profileName) {

    // var options: FileUploadOptions = {
    //   fileKey: 'image',
    //   chunkedMode: false,
    //   mimeType: 'multipart/form-data',
    //   params: {'desc': desc, 'userId':token['uid'], 'userName': profileName, 'phoneNumber':token['phoneNumber']}

    // }    
    const FileTransfer = this.transfer.create();

    // return FileTransfer.upload(img, this.url, options);


    this.user.userId = token['uid'];
    this.user.userName = profileName;
    this.user.phoneNumber = token['phoneNumber'];

    // console.log('Hello UserAuthenticationProvider Provider');
    // console.log(this.user);



    // this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
    //   .set('authorization', 'Bearer ' + token['pa']);
    // console.log(this.returnedData)

    this.http.post<any>(this.url + `users`, this.user, { headers: this.returnedData })
      .subscribe(result => { console.log("POST"); console.log(result) });
  }

}
