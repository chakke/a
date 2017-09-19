import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingModalNgayDi } from './qbtkt-modal-ngaydi';

@NgModule({
  declarations: [
    QBTicketingModalNgayDi,
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingModalNgayDi),
  ],
  exports: [
    QBTicketingModalNgayDi
  ]
})
export class QBTicketingModalNgayDiModule { }
