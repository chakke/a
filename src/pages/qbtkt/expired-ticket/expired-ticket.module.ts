import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpiredTicketPage } from './expired-ticket';

@NgModule({
  declarations: [
    ExpiredTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpiredTicketPage),
  ],
})
export class ExpiredTicketPageModule {}
