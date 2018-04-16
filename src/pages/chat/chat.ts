import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';



@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  _chatSubscription;
  messages: object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db: AngularFireDatabase) {
  }

  // sendMessage() {
  //   this.db.list('/chat').push({
  //     username: this.username,
  //     message: this.message
  //   }).then( () => {
  //     // message is sent
  //   }).catch( () => {
  //     // some error. maybe firebase is unreachable
  //   });
  //   this.message = '';
  // }

  ionViewDidLoad() {
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has joined the room`
    });
  }

  ionViewWillLeave(){
    this._chatSubscription.unsubscribe();
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has left the room`
    });
  }

}
