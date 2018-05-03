import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { ChatProvider } from '../../providers/chat/chat';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  user: string = '';
  userId: string = '';
  messageText: string = '';
  _chatSubscription;
  messages: object[] = [];
  room: string = '';
  messageArray: Array<{ user: String, message: String }> = [];


  constructor(
    public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
    private toastCtrl: ToastController, private _chatService: ChatProvider) {

    this.room = navParams.get('param2');
    this._chatService.newUserJoined()
      .subscribe(data => this.messageArray.push(data));


    this._chatService.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));

    this._chatService.newMessageReceived()
      .subscribe(data => this.messageArray.push(data));

    this.storage.get('userName').then((val) => {
      this.user = val;
    });
    this.storage.get('userId').then((val) => {
      this.userId = val;
    });
  }

  // ionViewDidLoad() {
  // this.db.list('/chat').push({
  //   specialMessage: true,
  //   message: `${this.username} has joined the room`
  // });
  // }

  sendMessage() {
    this._chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
    this.messageText = ''
  }

  ionViewWillLeave() {
    this._chatService.leaveRoom({ user: this.user, room: this.room });

    // this._chatSubscription.unsubscribe();
    // this.db.list('/chat').push({
    //   specialMessage: true,
    //   message: `${this.username} has left the room`
    // });
    // this.socket.disconnect();
  }

}
