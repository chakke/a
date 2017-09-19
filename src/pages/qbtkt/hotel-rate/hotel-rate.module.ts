import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelRatePage } from './hotel-rate';

@NgModule({
  declarations: [
    HotelRatePage,
  ],
  imports: [
    IonicPageModule.forChild(HotelRatePage),
  ],
})
export class HotelRatePageModule {}
