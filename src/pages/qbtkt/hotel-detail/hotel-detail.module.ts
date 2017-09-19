import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelDetailPage } from './hotel-detail';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    HotelDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelDetailPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-XtQja97lcn_5hyALAsdPoyrRmkpOghU'
    }),
  ],
})
export class HotelDetailPageModule { }
