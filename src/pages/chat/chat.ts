import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Storage } from '@ionic/storage';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';



@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message = '';
  _chatSubscription;
  messages: object[] = [];

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
    private socket: Socket, private toastCtrl: ToastController) {
    this.storage.get('userName').then((val) => {
      this.username = val;
    });
    // this._chatSubscription = this.db.list('/chat').valueChanges().subscribe(data => {
    //   this.messages = data;
    // });
    // this.getMessages().subscribe(message => {
    //   this.messages.push(message);
    // })

    // this.getUsers().subscribe(data => {
    //   let user = data['user'];
    //   if(data['event'] === 'left'){
    //     this.showToast('User left: ' + user);
    //   }else{
    //     this.showToast('User joined: ' + user);
    //   }
    // })
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', data => {
        observer.next(data);
      })
    });
    return observable;
  }


  sendMessage() {
    this.socket.emit('add-message', { text: this.message});
    this.message = '';
    // this.db.list('/chat').push({
    //   username: this.username,
    //   message: this.message
    // }).then(() => {
    //   // message is sent
    // })
    // // .catch( () => {
    // //   // some error. maybe firebase is unreachable
    // // });
    // this.message = '';
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', data => {
        observer.next(data);
      })
    });
    return observable;
  }

  

  ionViewDidLoad() {
    // this.db.list('/chat').push({
    //   specialMessage: true,
    //   message: `${this.username} has joined the room`
    // });
  }

  ionViewWillLeave() {
    // this._chatSubscription.unsubscribe();
    // this.db.list('/chat').push({
    //   specialMessage: true,
    //   message: `${this.username} has left the room`
    // });
    this.socket.disconnect();
  }

  showToast(msg) {
     let toast = this.toastCtrl.create({
       message: msg,
       duration: 2000
     });
     toast.present();
  }

}
