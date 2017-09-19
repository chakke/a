import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingModalNumber } from './qbtkt-modal-number';

@NgModule({
  declarations: [
    QBTicketingModalNumber,
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingModalNumber),
  ],
  exports: [
    QBTicketingModalNumber
  ]
})
export class QBTicketingModalNumberModule { }
