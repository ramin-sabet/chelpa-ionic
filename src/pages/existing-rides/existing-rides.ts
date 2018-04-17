import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { UserAuthenticationProvider } from '../../providers/user-authentication/user-authentication';
import { EventsDetailsProvider } from '../../providers/events-details/events-details';
import { AlertController } from 'ionic-angular';
import { AvailableRidesProvider } from '../../providers/available-rides/available-rides';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
    public actionsheetCtrl: ActionSheetController, private userDetails: UserAuthenticationProvider,
    private joinTheRide: EventsDetailsProvider, private alertCtrl: AlertController,
    private availableRides: AvailableRidesProvider, private storage: Storage) {
    this.tripId = navParams.get('param1');
    this.availableRides.getAsyncData(this.tripId)
      .subscribe(data => {
        if (data == null) {
          for (var i = 0; i < data.modifiedData.length; i++) {
            this.arrayRides.push({ 'From': data.modifiedData[i]['from'], 'To': data.modifiedData[i]['to'], 'creatorId': data.modifiedData[i]['creatorId'], 'rideId': data.modifiedData[i]['_id'] })
          }
        } else {
          this.dataReturned = false;
        }
      });

  }

  ionViewDidLoad() {

  }

  goToHomePage() {
    this.navCtrl.push('ChelpaHomePage');
  }


  joinRide(ride) {

    let joinedPerson = { "userId": ride.creatorId, "rideId": ride.rideId };



    let confirm = this.alertCtrl.create({
      title: 'Joining the Ride?',
      message: 'As you joining this ride your phone number with be available to the creator of the ride?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            let alert = this.alertCtrl.create({
              title: 'Cancelled!',
              subTitle: 'You have cancelled your request to join the ride!',
              buttons: ['OK']
            });
            alert.present();
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.joinTheRide.joinRide(this.objectId, joinedPerson);
            this.navCtrl.push('ChelpaHomePage');
          }
        }
      ]
    });
    confirm.present();
  }





  delete(item) {

  }

  mute(item) {

  }

  download(item) {

  }

  openMenu() {

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
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

  async showDetails(user) {

    await this.userDetails.getDetails(user.creatorId)
      .subscribe((data => {
        console.log("JKL");
        console.log(data.data);
        this.user = ({ "createdAt": data.data.createdAt, "phoneNumber": data.data.phoneNumber, "userName": data.data.userName })
        this.navCtrl.push('UserProfilePage', {
          param1: this.user
        });
      }));
  }
}