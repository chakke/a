import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-qbtkt-notifications',
  templateUrl: 'qbtkt-notifications.html',
})
export class QBTicketingNotificationsPage {

  constructor(
    private navCtrl: NavController,
    private mQBTicketingModule: QBTicketingModule
  ) {

  }

}
