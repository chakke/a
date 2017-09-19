import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingModalSubMenu } from './modal-submenu';

@NgModule({
  declarations: [
    QBTicketingModalSubMenu,
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingModalSubMenu),
  ],
  exports: [
    QBTicketingModalSubMenu
  ]
})
export class QBTicketingModalSubMenuModule { }
