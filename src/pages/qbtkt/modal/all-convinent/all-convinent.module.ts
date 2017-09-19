import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllConvinentPage } from './all-convinent';
import { SharedModule } from '../../../../app/shared.module'
@NgModule({
  declarations: [
    AllConvinentPage,
  ],
  imports: [
    IonicPageModule.forChild(AllConvinentPage), SharedModule
  ],
})
export class AllConvinentPageModule { }
