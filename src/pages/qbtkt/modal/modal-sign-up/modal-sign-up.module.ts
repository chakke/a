import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSignUpPage } from './modal-sign-up';

@NgModule({
  declarations: [
    ModalSignUpPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSignUpPage),
  ],
  exports: [
    ModalSignUpPage
  ]
})
export class ModalSignUpPageModule { }
