import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingTabsPage } from './qbtkt-tabs';

@NgModule({
  declarations: [
    QBTicketingTabsPage
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingTabsPage),
  ],
  exports: [
    QBTicketingTabsPage
  ]
})
export class QBTicketingTabsPageModule { }
