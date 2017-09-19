import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingModalLoaiGhe } from './qbtkt-modal-seattype';

@NgModule({
  declarations: [
    QBTicketingModalLoaiGhe,
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingModalLoaiGhe),
  ],
  exports: [
    QBTicketingModalLoaiGhe
  ]
})
export class QBTicketingModalLoaiGheModule { }
