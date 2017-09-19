import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ModalController, Content } from 'ionic-angular';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-qbtkt-flight-list',
  templateUrl: 'qbtkt-flight-list.html',
})
export class QBTicketingFlightListPage {
  @ViewChild(Content) content: Content;

  mViewData = {};

  mShowFooter: boolean = false;

  constructor(
    private navCtrl: NavController,
    private mModalController: ModalController,
    private mAppModule: QBTicketingModule
  ) {
    this.mViewData = this.mAppModule.getAppConfig().getViewData("QBTicketingFlightListPage");
  }

  ionViewDidEnter() {
    this.mShowFooter = true;
    this.calculateContentHeight();
  }
  calculateContentHeight() {
    let height = this.content.getContentDimensions().contentHeight;

    let header = document.getElementById("page-header");
    if (header) {
      height -= header.clientHeight;
      height -= 10;
    }

    let content = document.getElementById("page-content");
    if (content) {
      content.style.maxHeight = height + "px";
    }
  }
  onClickClosePage() {
    this.navCtrl.pop();
  }
  onClickFlight() {
    this.navCtrl.push("QBTicketingFlightDetailPage");
  }
}
