import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingContactInfoPage } from './booking-contact-info';

@NgModule({
  declarations: [
    BookingContactInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingContactInfoPage),
  ],
  exports: [
    BookingContactInfoPage
  ]
})
export class BookingContactInfoPageModule { }
