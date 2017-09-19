import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PriceFilterModalPage } from './price-filter-modal';

@NgModule({
  declarations: [
    PriceFilterModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PriceFilterModalPage),
  ],
})
export class PriceFilterModalPageModule {}
