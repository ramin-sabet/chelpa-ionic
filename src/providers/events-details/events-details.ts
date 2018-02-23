import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class EventsDetailsProvider {

  constructor(public http: HttpClient) {  
  }

  getDetails() {
    return {eventName:"CasinoRama", time:"Friday, January 03; 4pm", location:"225 VanHorneAvenue", guestNumbers:"2",
            costs:"20 Dollars"};
  }

}
