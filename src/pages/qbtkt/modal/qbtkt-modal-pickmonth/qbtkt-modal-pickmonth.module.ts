import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QbtktModalPickmonthPage } from './qbtkt-modal-pickmonth';

@NgModule({
  declarations: [
    QbtktModalPickmonthPage,
  ],
  imports: [
    IonicPageModule.forChild(QbtktModalPickmonthPage),
  ],
  exports: [
    QbtktModalPickmonthPage
  ]
})
export class QbtktModalPickmonthPageModule { }
