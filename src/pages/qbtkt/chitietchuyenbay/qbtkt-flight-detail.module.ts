import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingFlightDetailPage } from './qbtkt-flight-detail';

@NgModule({
  declarations: [
    QBTicketingFlightDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingFlightDetailPage),
  ],
  exports: [
    QBTicketingFlightDetailPage
  ]
})
export class QBTicketingFlightDetailPageModule { }
