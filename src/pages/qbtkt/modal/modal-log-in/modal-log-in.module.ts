import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalLogInPage } from './modal-log-in';

@NgModule({
  declarations: [
    ModalLogInPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalLogInPage),
  ],
  exports: [
    ModalLogInPage
  ]
})
export class ModalLogInPageModule { }
