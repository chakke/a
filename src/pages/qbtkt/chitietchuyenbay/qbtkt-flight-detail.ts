import { Component, ViewChild } from '@angular/core';
import { Slides, IonicPage, NavController, ModalController, Platform, AlertController } from 'ionic-angular';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-qbtkt-flight-detail',
  templateUrl: 'qbtkt-flight-detail.html',
})
export class QBTicketingFlightDetailPage {
  @ViewChild(Slides) slides: Slides;
  mViewData = {};
  tab = "0";
  slideMinHeight = "368px";
  constructor(
    private navCtrl: NavController,
    private mModalController: ModalController,
    private alertCtrl: AlertController,
    private mAppModule: QBTicketingModule,
    private platform: Platform
  ) {
    this.mViewData = this.mAppModule.getAppConfig().getViewData("QBTicketingFlightDetailPage");
  }
  onClickClosePage() {
    this.navCtrl.pop();
  }
  ionViewDidEnter() {
    this.slideMinHeight = this.platform.height() - 200 + "px";
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex == 3) currentIndex = 2;
    this.tab = currentIndex.toString();
  }
  segmentChanged() {
    this.slides.slideTo(+this.tab);
  }
  onClickBookingInfo() {
    console.log("onClickBookingInfo");

    this.navCtrl.push("BookingInfoPage");
  }
}
