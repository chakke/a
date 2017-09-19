import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';
import { StringItem } from "../../../../providers/common/string-item";


@IonicPage()
@Component({
  selector: 'page-qbtkt-modal-submenu',
  templateUrl: 'modal-submenu.html',
})
export class QBTicketingModalSubMenu {

  mDatas = {
    version: "1.0",
    closeText: "Đóng",
    items: []
  };

  constructor(
    private navCtrl: NavController,
    private mNavParams: NavParams,
    private mAppModule: QBTicketingModule
  ) {
    this.mDatas.version = this.mAppModule.getAppConfig().getAppVersion();

    this.mDatas.items = [];
    let items = this.mNavParams.get("items");
    if (items) {
      for (let item of items) {
        this.mDatas.items.push(item);
      }
    }
  }

  ionViewDidEnter() {
    let header = document.getElementById("header");
    if (!header) return;
    if (!header.classList.contains("show")) header.classList.add("show");
  }
  mLeaving: boolean = false;

  onClickCloseModal() {
    if (this.mLeaving) return;
    let header = document.getElementById("header");
    if (!header) return;
    let background = document.getElementById("background");
    if (background) {
      background.style.background = "none";
    }

    this.mLeaving = true;
    if (header.classList.contains("show")) header.classList.remove("show");

    setTimeout(() => {
      this.navCtrl.pop({
        animate: false
      });
    }, 400);

  }

  onClickSetting(item: StringItem) {
    console.log("on click setting " + item.id);
    this.onClickCloseModal();
  }
}
