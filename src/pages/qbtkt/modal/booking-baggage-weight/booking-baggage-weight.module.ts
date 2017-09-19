import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingBaggageWeightPage } from './booking-baggage-weight';

@NgModule({
  declarations: [
    BookingBaggageWeightPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingBaggageWeightPage),
  ],
  exports: [
    BookingBaggageWeightPage
  ]
})
export class BookingBaggageWeightPageModule { }
