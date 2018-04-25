import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ChatProvider {

  url = 'http://localhost:3000/api/v1/chats/new/5accf859b327326548be4103';
  returnedData: any;
  userId: string = '5accf859b327326548be4103';
  re = '5accf859b327326548be4103';

  constructor(public http: HttpClient, public storage: Storage) {
    this.storage.get('userId').then((val) => {
      this.userId = val;
    });
  }

  createNewConversation(recipientId) {

    let param = { "_id": "5accf859b327326548be4103", "composedMessage": "the conversation started!" }

    this.storage.get('firebaseToken').then((val) => {
      this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
        .set('authorization', 'Bearer ' + val);
    });

    console.log(param)
    this.http.post(this.url, param, { headers: this.returnedData }).subscribe(data => console.log(data));
  }
}
