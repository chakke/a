import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingModalAirport } from './qbtkt-modal-airport';

@NgModule({
  declarations: [
    QBTicketingModalAirport,
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingModalAirport),
  ],
  exports: [
    QBTicketingModalAirport
  ]
})
export class QBTicketingModalAirportModule { }
