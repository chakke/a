import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ticket-detail',
  templateUrl: 'ticket-detail.html',
})
export class TicketDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketDetailPage'); 
  } 

  gotoBooking(){
    this.navCtrl.push("TiketBookingTakeSeatPage");
  }

  onClickClosePage(){
    this.navCtrl.pop();
  }


}
