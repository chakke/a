import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindFlightPickPlacePage } from './find-flight-pick-place';
import { SharedModule } from "../../app/shared.module";

@NgModule({
  declarations: [
    FindFlightPickPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(FindFlightPickPlacePage),
    SharedModule
  ],
})
export class FindFlightPickPlacePageModule { }
