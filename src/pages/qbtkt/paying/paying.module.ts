import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayingPage } from './paying';

@NgModule({
  declarations: [
    PayingPage,
  ],
  imports: [
    IonicPageModule.forChild(PayingPage),
  ],
})
export class PayingPageModule {}
