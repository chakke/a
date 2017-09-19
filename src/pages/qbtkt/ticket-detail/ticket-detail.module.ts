import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketDetailPage } from './ticket-detail';
import { SharedModule } from '../../../app/shared.module'
@NgModule({
  declarations: [
    TicketDetailPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(TicketDetailPage),
  ],
})
export class TicketDetailPageModule { }
