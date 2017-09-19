import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingRefundInfoPage } from './booking-refund-info';

@NgModule({
  declarations: [
    BookingRefundInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingRefundInfoPage),
  ],
  exports: [
    BookingRefundInfoPage
  ]
})
export class BookingRefundInfoPageModule { }
