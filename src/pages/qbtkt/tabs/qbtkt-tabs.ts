import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-qbtkt-tabs',
  templateUrl: 'qbtkt-tabs.html'
})
export class QBTicketingTabsPage {

  tab1Root = "QBTicketingHomePage";
  tab2Root = "QBTicketingBookedPage";
  tab3Root = "QBTicketingNotificationsPage";
  tab4Root = "QBTicketingAccountPage";


  constructor() {

  }
}
