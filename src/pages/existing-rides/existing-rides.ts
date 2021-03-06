import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { UserAuthenticationProvider } from '../../providers/user-authentication/user-authentication';
import { AlertController } from 'ionic-angular';
import { AvailableRidesProvider } from '../../providers/available-rides/available-rides';
import { ChatProvider } from '../../providers/chat/chat';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-existing-rides',
  templateUrl: 'existing-rides.html',
})
export class ExistingRidesPage {

  user: any;
  rides;
  objectId;
  tripId: string = '';
  userInfo: any[] = [];
  creatorId: string;
  arrayRides: any[] = [];
  dataReturned: Boolean = true;
  userName: string = '';
  room: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
    public actionsheetCtrl: ActionSheetController, private userDetails: UserAuthenticationProvider,
    private alertCtrl: AlertController, private _chatService: ChatProvider,
    private availableRides: AvailableRidesProvider, private storage: Storage) {

    this.storage.get('userName').then((val) => {
      this.userName = val;
    });
    this.tripId = navParams.get('param1');
    this.availableRides.getAsyncData(this.tripId)
      .subscribe(data => {
        console.log(data);
        if (data == 'No Data exists') {
          this.dataReturned = false;
        } else {
          for (var i = 0; i < data.modifiedData.length; i++) {
            this.arrayRides.push({ 'From': data.modifiedData[i]['from'], 'To': data.modifiedData[i]['to'], 'creatorId': data.modifiedData[i]['creatorId'], 'rideId': data.modifiedData[i]['_id'] })
            this.dataReturned = true;
          }
        }
      });

  }

  ionViewDidLoad() {

  }

  goToHomePage() {
    this.navCtrl.push('ChelpaHomePage');
  }



  async chat(ride) {


    await this.storage.get('conversationId').then((val) => {
      this.room = val;
    });
    this._chatService.joinRoom({ user: this.userName, room: this.room });
    this.navCtrl.push('ChatPage', {
      param1: this.userName,
      param2: this.room
    })
  }





  delete(item) {

  }

  mute(item) {

  }

  download(item) {

  }

  limitedResult() {

    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'timeLimit',
          placeholder: 'Range of time in minutes'
        },
        {
          name: 'originLimit',
          placeholder: 'Range of search from the origin in miles'
        },
        {
          name: 'destinationLimit',
          placeholder: 'Range of search from the destination in miles'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Limit the results',
          handler: data => {
            this.availableRides.limitedResult(this.tripId, data)
              .subscribe(data => {
                this.arrayRides = [];
                if (data == 'No Data exists') {
                  this.dataReturned = false;
                } else {
                  for (var i = 0; i < data.modifiedData.length; i++) {
                    this.arrayRides.push({ 'From': data.modifiedData[i]['from'], 'To': data.modifiedData[i]['to'], 'creatorId': data.modifiedData[i]['creatorId'], 'rideId': data.modifiedData[i]['_id'] })
                    this.dataReturned = true;
                  }
                }
              });
          }
        }
      ]
    });
    prompt.present();
  }

  async showDetails(user) {

    await this.userDetails.getDetails(user.creatorId)
      .subscribe((data => {
        this.user = ({ "createdAt": data.data.createdAt, "phoneNumber": data.data.phoneNumber, "userName": data.data.userName })
        this.navCtrl.push('UserProfilePage', {
          param1: this.user
        });
      }));
  }
}