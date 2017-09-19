import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingBookedPage } from './qbtkt-booked';

@NgModule({
  declarations: [
    QBTicketingBookedPage,
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingBookedPage),
  ],
  exports: [
    QBTicketingBookedPage
  ]
})
export class QBTicketingBookedPageModule { }
