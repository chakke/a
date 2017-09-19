import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingLoadingPage } from './qbtkt-loading';

@NgModule({
  declarations: [
    QBTicketingLoadingPage,
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingLoadingPage),
  ],
  exports: [
    QBTicketingLoadingPage
  ]
})
export class QBTicketingLoadingPageModule {}
