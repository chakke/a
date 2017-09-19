import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingFlightListPage } from './qbtkt-flight-list';

import { FlightComponent } from '../../../components/flight/flight';

@NgModule({
  declarations: [
    QBTicketingFlightListPage,
    FlightComponent
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingFlightListPage),
  ],
  exports: [
    QBTicketingFlightListPage
  ]
})
export class QBTicketingFlightListPageModule { }
