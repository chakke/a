import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';
import { AppAnimation } from '../../../../providers/app-animation';

@IonicPage()
@Component({
  selector: 'page-qbtkt-modal-number',
  templateUrl: 'qbtkt-modal-number.html',
})
export class QBTicketingModalNumber {
  mValue: string = "0";
  mDatas = {
    "title": "Nhập số lượng hành khách",
    "text_close": "Huỷ",
    "text_select": "Chọn",
    "min": 0,
    "max": 1000,
    "canStartWithZero": false
  };
  constructor(
    private mViewController: ViewController,
    private mNavParams: NavParams,
    private mAppModule: QBTicketingModule
  ) {
    if (this.mNavParams.get("value")) {
      this.mValue = "" + this.mNavParams.get("value");
    }
  }
  ionViewWillEnter() {
    this.mDatas = this.mAppModule.getAppConfig().getViewData("ModalSoLuongKhach");
  }

  onClickCloseModal() {
    this.removeBackground();
    this.mViewController.dismiss({
      value: -1
    }, "", {
        animate: false
      });
  }
  onClickBackspace() {
    if (this.mValue.length > 0) this.mValue = this.mValue.substring(0, this.mValue.length - 1);
    if (this.mValue.length == 0) this.mValue = "0";
  }
  onClickNumber(value: number) {
    if (!this.mDatas.canStartWithZero && (this.mValue.length == 1 && parseInt(this.mValue) == 0)) this.mValue = "";
    this.mValue += "" + value;

    if (parseInt(this.mValue) > this.mDatas.max)
      this.mValue = "" + this.mDatas.max;



    let element = document.getElementById("number-" + value);
    if (element) {
      element.classList.remove("touch-animation");
      setTimeout(() => {
        if (element) element.classList.add("touch-animation");
      }, 50);

    }
  }
  removeBackground() {
    let bg = document.getElementById("a-background");

    if (bg) bg.style.background = "transparent";
  }
  onClickSelect() {
    this.removeBackground();
    this.mViewController.dismiss({
      value: parseInt(this.mValue)
    }, "", {
        animate: false
      });
  }

}
