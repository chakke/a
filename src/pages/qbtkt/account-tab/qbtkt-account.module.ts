import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingAccountPage } from './qbtkt-account';

@NgModule({
  declarations: [
    QBTicketingAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingAccountPage),
  ],
  exports: [
    QBTicketingAccountPage
  ]
})
export class QBTicketingAccountPageModule { }
