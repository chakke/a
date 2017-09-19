import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPlaceModalPage } from './search-place-modal';
import {SharedModule} from '../../../../app/shared.module'
@NgModule({
  declarations: [
    SearchPlaceModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPlaceModalPage),
    SharedModule
  ],
})
export class SearchPlaceModalPageModule {}
