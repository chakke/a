import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QBTicketingHomePage } from './qbtkt-home';
import { ImageCardComponent } from '../../../components/image-card/image-card';

@NgModule({
  declarations: [
    QBTicketingHomePage,
    ImageCardComponent
  ],
  imports: [
    IonicPageModule.forChild(QBTicketingHomePage),
  ],
  exports: [
    QBTicketingHomePage
  ]
})
export class QBTicketingHomePageModule { }
