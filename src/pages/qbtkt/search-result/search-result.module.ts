import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResultPage } from './search-result';
import { LoadingComponent } from '../../../components/loading/loading';

@NgModule({
  declarations: [
    SearchResultPage,
    LoadingComponent
  ],
  imports: [
    IonicPageModule.forChild(SearchResultPage),
  ],
})
export class SearchResultPageModule { }
