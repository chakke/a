import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingNotificationsPage } from './qbtkt-notifications';

@NgModule({
  declarations: [
    QBTicketingNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingNotificationsPage),
  ],
  exports: [
    QBTicketingNotificationsPage
  ]
})
export class QBTicketingNotificationsPageModule { }
