import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingFindHotelPage } from './qbtkt-find-hotel';
import { SharedModule } from '../../../app/shared.module'

@NgModule({
  declarations: [
    QBTicketingFindHotelPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(QBTicketingFindHotelPage),
  ],
  exports: [
    QBTicketingFindHotelPage
  ]
})
export class QBTicketingFindHotelPageModule { }
