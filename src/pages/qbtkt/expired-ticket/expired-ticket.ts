import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-expired-ticket',
  templateUrl: 'expired-ticket.html',
})
export class ExpiredTicketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpiredTicketPage');
  }

  onClickClosePage() { this.navCtrl.pop() }
  gotoDetail() {
    this.navCtrl.push('TicketDetailPage');
  }

}
