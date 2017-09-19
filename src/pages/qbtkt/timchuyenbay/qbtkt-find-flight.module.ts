import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingFindFlightPage } from './qbtkt-find-flight';

@NgModule({
  declarations: [
    QBTicketingFindFlightPage
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingFindFlightPage),
  ],
  exports: [
    QBTicketingFindFlightPage
  ]
})
export class QBTicketingFindFlightPageModule { }
