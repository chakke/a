import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, IonicFormInput } from 'ionic-angular';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';
import { AppController } from "../../../providers/app-controller";


@IonicPage()
@Component({
  selector: 'page-qbtkt-home',
  templateUrl: 'qbtkt-home.html',
})
export class QBTicketingHomePage {
  mViewData: any = {};

  mCategories = [];

  constructor(
    private navCtrl: NavController,
    private mModalController: ModalController,
    private mAppModule: QBTicketingModule
  ) {
    this.mViewData = this.mAppModule.getAppConfig().getViewData("QBTicketingHomePage");
    this.mCategories = this.mViewData.categories;

  }

  onTapFunction(index: number) {
    if (index == 0) this.navCtrl.push("QBTicketingFindFlightPage");
    else if (index == 1) this.navCtrl.push("QBTicketingFindHotelPage");
  }
  onClickSubMenu() {
    let modal = this.mModalController.create("QBTicketingModalSubMenu", {
      items: this.mViewData["submenu"]
    });
    modal.present({
      animate: false
    });
  }
  onClickLogo() {
    if (AppController.getInstance().getNavController()) AppController.getInstance().getNavController().setRoot("StoreHomePage", {}, { animate: true });
  }

  itemClick(href, dataHref) {
    if (href && dataHref) {
      this.navCtrl.push(href, dataHref);
    } else this.navCtrl.push("SamplePage");
  }

}
