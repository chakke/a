import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassengerInfoPage } from './passenger-info';

@NgModule({
  declarations: [
    PassengerInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PassengerInfoPage),
  ],
  exports: [
    PassengerInfoPage
  ]
})
export class PassengerInfoPageModule { }
