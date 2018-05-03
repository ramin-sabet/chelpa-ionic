import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable()
export class ChatProvider {

  private socket = io.connect('http://localhost:3000');
  // url = 'http://localhost:3000/api/v1/chats';
  // returnedData: any;
  // userId: string = '5accf859b327326548be4103';
  // userName: string = '';


  constructor(public http: HttpClient, public storage: Storage) {
    // this.storage.get('userId').then((val) => {
    //   this.userId = val;
    // });
    // this.storage.get('userName').then((val) => {
    //   this.userName = val;
    // });
  }
  joinRoom(data) {
    this.socket.emit('join', data);
  }

  newUserJoined() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('new user joined', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }

  leaveRoom(data) {
    this.socket.emit('leave', data);
  }

  userLeftRoom() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('left room', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  newMessageReceived() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }
  



  // async createNewConversation(tripCreator) {

  //   let param = { "participant1": tripCreator, "participant2": this.userId, "composedMessage": "the conversation started!" }

  //   this.storage.get('firebaseToken').then((val) => {
  //     this.returnedData = new HttpHeaders().set('Content-Type', 'application/json')
  //       .set('authorization', 'Bearer ' + val);
  //   });

  //   await this.http.post(this.url, param, { headers: this.returnedData }).subscribe(data => {
  //     this.conversationId = data['conversationId'];
  //     this.storage.set('conversationId', this.conversationId);
  //   })
  //   await this.socket.emit('join', { "user": this.userName, "conversationId": this.conversationId })
  // }

  // leaveRoom(data) {
  //   this.socket.emit('leave', { "user": this.userName, "conversationId": this.conversationId })
  // }

  // userLeftRoom() {
  //   let observable = new Observable<{ user: string, message: string }>(observer => {
  //     this.socket.on('left room', (data) => {
  //       observer.next(data);
  //     });
  //     return () => { this.socket.disconnect(); }
  //   });
  //   return observable;
  // }
}
