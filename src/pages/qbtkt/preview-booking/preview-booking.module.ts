import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviewBookingPage } from './preview-booking';

@NgModule({
  declarations: [
    PreviewBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviewBookingPage),
  ],
})
export class PreviewBookingPageModule {}
